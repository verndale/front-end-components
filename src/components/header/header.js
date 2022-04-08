import { Component } from '@verndale/core'
import { createFocusTrap } from 'focus-trap'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { stringifyUrl } from 'query-string'
import { convertToText } from 'number-to-text'
import 'number-to-text/converters/en-us'
export const DOWN = 40
export const ESCAPE = 27
export const RETURN = 13
export const TAB = 9
export const UP = 38

export function searchSuggestion({ Label, Tag, Url }, index) {
  return `
    <li
      aria-selected="false"
      aria-labelledby="search-suggested-results-heading"
      class="header__search-item"
      role="option"
      id="suggestion-${index}"
    >
      <a href="${Url}" tabindex="0">
        ${Label ? `<span>${Label}</span>` : ''}
        ${Tag ? `<span>${Tag}</span>` : ''}
      </a>
    </li>
  `
}

export function searchSuggestionDidYouMean(Label, Value, Url, index) {
  return `
      <li
      aria-labelledby="search-suggested-results-heading"
      class="header__search-item--did-you-mean"
      role="option"
      id="suggestion-${index}"
    >
      <a href="${Url}" tabindex="0">
        ${Label ? `<span>${Label} ${Value}</span>` : ''}
      </a>
    </li>
  `
}

class Header extends Component {
  setupDefaults() {
    const self = this

    this.dom = {
      $btnNav: this.el.querySelector('.header__mobile-btn--nav'),
      $mobileItemBtn: this.el.querySelectorAll('.header__mobile-item button'),
      $mobileMenuItemBackBtn: this.el.querySelectorAll(
        '.header__mobile-item--back button'
      ),
      $mobileInnerNav: this.el.querySelectorAll('.header__mobile-inner-nav'),
      $search: this.el.querySelector('.header__search'),
      $searchBtn: this.el.querySelector('.header__search-btn'),
      $searchInput: this.el.querySelector('.header__search-input'),
      $searchField: this.el.querySelector('.header__search-field'),
      $clearInputBtn: this.el.querySelector('.header__clear-input-btn'),
      $itemBtn: this.el.querySelectorAll('.header__item button'),
      $itemlinks: this.el.querySelectorAll('.header__item a'),
      $activePage: this.el.querySelector('.header__item--active'),
      $resultsList: this.el.querySelector('.header__search-results ul'),
      $viewAll: this.el.querySelector('.header__search-view-all'),
      $searchAnnounce: this.el.querySelector('#search-announce'),
      $headerContainer: this.el.querySelector('.header__content-wrapper'),
      $headerItemNav: this.el.querySelectorAll('.header__inner-nav')
    }

    this.endpoint = this.el.dataset.endpoint
    this.searchPageUrl = this.el.dataset.searchPageUrl
    this.mainFocusTrap = createFocusTrap(this.el, {
      onActivate() {
        disableBodyScroll(self.el, {
          allowTouchMove: (el) => el.closest('.header__mobile-nav')
        })
      },
      onDeactivate() {
        clearAllBodyScrollLocks()
      }
    })

    this.searchInputWidth()
    this.displaySubmenus()
    this.lastScrollTop = 0
  }

  addListeners() {
    this.dom.$btnNav.addEventListener('click', () => this.handleBtnNavClick())
    this.dom.$mobileItemBtn.forEach(($btn) =>
      $btn.addEventListener('click', (e) => this.handleMobileItemBtnClick(e))
    )
    this.dom.$mobileMenuItemBackBtn.forEach(($btn) =>
      $btn.addEventListener('click', (e) => this.handleMenuItemBackBtnClick(e))
    )
    this.dom.$mobileInnerNav.forEach(($nav) =>
      $nav.addEventListener('transitionend', (e) =>
        this.handleMobileInnerNavTransitionEnd(e)
      )
    )
    this.dom.$mobileInnerNav.forEach(($nav) =>
      $nav.addEventListener('focusout', (e) =>
        this.handleMobileInnerNavFocusout(e)
      )
    )
    this.dom.$itemBtn.forEach(($btn) =>
      $btn.addEventListener('click', (e) => this.handleItemBtnClick(e))
    )
    this.dom.$itemlinks.forEach(($link) =>
      $link.addEventListener('click', (e) => this.handleItemActive(e))
    )
    this.dom.$searchBtn.addEventListener('click', () =>
      this.handleSearchBtnClick()
    )
    this.dom.$searchField.addEventListener('transitionend', (e) =>
      this.handleSearchFieldTransitionEnd(e)
    )
    this.dom.$clearInputBtn.addEventListener('click', (e) =>
      this.handleClearInputBtn(e)
    )
    this.dom.$search.addEventListener('focusout', (e) =>
      this.handleSearchFocusout(e)
    )
    this.dom.$searchInput.addEventListener('keydown', (e) =>
      this.handleSearchInputKeydown(e)
    )
    this.dom.$resultsList.addEventListener('keydown', (e) =>
      this.handleResultsListKeydown(e)
    )
    this.dom.$searchInput.addEventListener('input', (e) =>
      this.handleSearchInputChange(e)
    )
    this.dom.$searchInput.addEventListener('blur', (e) =>
      this.handleSearchInputBlur(e)
    )
    this.el.addEventListener('focus', (e) => this.handleListFocus(e), true)
    document.addEventListener('click', (e) => this.handleOutsideClick(e))
    window.addEventListener('resize', this.handleResize.bind(this))
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  displaySubmenus() {
    this.dom.$headerItemNav.forEach((item) => item.removeAttribute('style'))
  }

  searchInputWidth() {
    this.searchSvgDimensions = this.dom.$searchBtn.getBoundingClientRect()
    this.headerDimensions = this.dom.$headerContainer.getBoundingClientRect()
    this.searchWidth =
      this.headerDimensions.left +
      this.headerDimensions.width -
      this.searchSvgDimensions.left -
      20
    this.el.style = `--search-width: ${this.searchWidth}px`
  }

  handleBtnNavClick() {
    const isExpanded = this.dom.$btnNav.getAttribute('aria-expanded') === 'true'

    this.el.classList.toggle('header--expanded', !isExpanded)
    this.dom.$btnNav.setAttribute('aria-expanded', !isExpanded)
    this.closeSearchInput(false)

    if (isExpanded) {
      this.mainFocusTrap.deactivate()
    } else {
      this.mainFocusTrap.activate()
    }
  }

  handleMobileItemBtnClick(e) {
    e.currentTarget.setAttribute('aria-expanded', true)
  }

  handleItemActive(e) {
    this.dom.$activePage?.classList.remove('header__item--active')
    const clickedLink = e.currentTarget.closest('.header__item')
    clickedLink.classList.add('header__item--active')
    this.dom.$activePage = clickedLink

    const butHref = e.currentTarget.getAttribute('href')
    if (butHref.indexOf('#')) {
      if (
        window.location.pathname === butHref.substring(0, butHref.indexOf('#'))
      ) {
        this.dom.$itemBtn.forEach(($btn) =>
          $btn.setAttribute('aria-expanded', false)
        )
      }
    }
  }

  handleMenuItemBackBtnClick(e) {
    const menu = e.currentTarget.closest('.header__mobile-inner-nav')
    const triggerBtn = menu.previousElementSibling
    triggerBtn.setAttribute('aria-expanded', false)
    triggerBtn.focus()
  }

  handleMobileInnerNavFocusout(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      const triggerBtn = e.currentTarget.previousElementSibling
      triggerBtn.setAttribute('aria-expanded', false)
    }
  }

  handleSearchFocusout(e) {
    if (!e.currentTarget.contains(e.relatedTarget) && e.relatedTarget) {
      this.closeSearchInput(false)
    }
  }

  handleItemBtnClick(e) {
    e.stopImmediatePropagation()
    const isExpanded = e.currentTarget.getAttribute('aria-expanded') === 'true'
    Array.from(this.dom.$itemBtn)
      .filter(($btn) => $btn !== e.currentTarget)
      .forEach(($btn) => $btn.setAttribute('aria-expanded', false))
    e.currentTarget.setAttribute('aria-expanded', !isExpanded)
  }

  handleOutsideClick(e) {
    if (!e.target.closest('.header__search')) {
      this.closeSearchInput(false)
    }

    if (!e.target.closest('.header__inner-nav')) {
      this.dom.$itemBtn.forEach(($btn) =>
        $btn.setAttribute('aria-expanded', false)
      )
    }
  }

  handleSearchBtnClick() {
    this.el.classList.remove('header--expanded')
    this.dom.$btnNav.setAttribute('aria-expanded', false)
    this.dom.$searchField.classList.add('header__search-field--open')
    this.dom.$searchBtn.setAttribute('tabindex', -1)
  }

  handleSearchFieldTransitionEnd(e) {
    if (e.propertyName === 'visibility') {
      this.dom.$searchInput.focus()
    }
  }

  handleSearchInputKeydown(e) {
    switch (e.keyCode) {
      case ESCAPE:
        this.closeSearchInput()
        break
      case DOWN:
        {
          e.preventDefault()
          const links = this.dom.$resultsList.querySelectorAll('a')
          if (this.dom.$searchField.dataset.hasResults === 'true' && links) {
            links[0].focus()
          } else {
            links[0].focus()
          }
        }
        break
      case UP:
        {
          e.preventDefault()
          const links = this.dom.$resultsList.querySelectorAll('a')
          if (this.dom.$searchField.dataset.hasResults === 'true' && links) {
            links[links.length - 1].focus()
          }
        }
        break
      case RETURN:
        this.dom.$viewAll.click()
        break
      default:
        break
    }
  }

  handleResultsListKeydown(e) {
    if (this.dom.$searchField.dataset.hasResults === 'true') {
      const links = Array.from(this.dom.$resultsList.querySelectorAll('a'))
      const currentIndex = links.findIndex(
        (link) => link === document.activeElement
      )

      switch (e.keyCode) {
        case DOWN:
          e.preventDefault()
          links[(currentIndex + 1) % links.length].focus()
          break
        case UP:
          e.preventDefault()
          links[(currentIndex - 1 + links.length) % links.length].focus()
          break
        case TAB: {
          e.preventDefault()
          if (e.shiftKey) {
            this.dom.$searchInput.focus()
          } else {
            this.dom.$viewAll.focus()
          }
        }
        default:
          break
      }
    }
  }

  handleSearchInputBlur(e) {
    if (!e.target.value) {
      this.closeSearchInput(false)
    }
  }

  closeSearchInput(focusBtn = true) {
    this.dom.$searchBtn.removeAttribute('tabindex')
    this.dom.$searchField.classList.remove('header__search-field--open')
    this.dom.$searchField.setAttribute('aria-expanded', false)

    if (focusBtn) {
      this.dom.$searchBtn.focus()
    }
  }

  handleMobileInnerNavTransitionEnd(e) {
    const backButton = e.currentTarget.querySelector(
      '.header__mobile-item--back button'
    )

    if (e.propertyName === 'visibility') {
      backButton.focus()
    }
  }

  handleClearInputBtn() {
    this.dom.$searchInput.focus()
    this.dom.$searchInput.value = ''
    this.dom.$searchField.setAttribute('aria-expanded', false)
    this.dom.$clearInputBtn.hidden = true
  }

  async handleSearchInputChange(e) {
    const { value } = e.target
    const [key, val] = this.dom.$viewAll.dataset.additionalQueryString?.split(
      '='
    ) || [null, null]

    if (value) {
      this.dom.$clearInputBtn.hidden = false
      const response = await fetch(
        stringifyUrl({ url: this.endpoint, query: { query: value } })
      ).then((blob) => blob.json())

      if (response?.Results?.length) {
        const resultsListHtml = response.Results.map(searchSuggestion).join('')

        this.dom.$resultsList.hidden = false
        this.dom.$resultsList.setAttribute('role', 'listbox')
        this.dom.$resultsList.innerHTML = resultsListHtml
        this.dom.$searchField.setAttribute('aria-expanded', true)
        this.dom.$searchAnnounce.textContent = `${convertToText(
          response.Results.length
        )} suggestion${
          response.Results.length > 1 ? 's' : ''
        } found, to navigate use up and down`
        this.dom.$searchField.dataset.hasResults = true
        this.dom.$viewAll.href = stringifyUrl({
          url: this.searchPageUrl,
          query: {
            keyword: value,
            ...(key && { [key]: val })
          }
        })
      } else if (response?.DidYouMean) {
        this.dom.$resultsList.hidden = false
        this.dom.$resultsList.removeAttribute('role')
        this.dom.$resultsList.innerHTML = searchSuggestionDidYouMean(
          response?.DidYouMean?.Label,
          response?.DidYouMean?.Value,
          stringifyUrl({
            url: this.searchPageUrl,
            query: {
              keyword: response.DidYouMean?.Value,
              ...(key && { [key]: val })
            }
          }),
          0
        )
        this.dom.$searchField.dataset.hasResults = false
        this.dom.$resultsList.removeAttribute('role')
        this.dom.$searchField.setAttribute('aria-expanded', true)
        this.dom.$searchAnnounce.textContent = ''
        this.dom.$viewAll.href = stringifyUrl({
          url: this.searchPageUrl,
          query: {
            keyword: value,
            ...(key && { [key]: val })
          }
        })
      }
    } else {
      this.dom.$clearInputBtn.hidden = true
      this.dom.$resultsList.hidden = true
      this.dom.$resultsList.innerHTML = ''
      this.dom.$searchField.dataset.hasResults = false
      this.dom.$searchField.setAttribute('aria-expanded', false)
    }
  }

  handleListFocus(e) {
    const suggestions = this.el.querySelectorAll(
      '.header__search-item:not(.header__search-item--did-you-mean)'
    )
    const item = e.target.closest(
      '.header__search-item:not(.header__search-item--did-you-mean)'
    )

    suggestions.forEach((suggestion) =>
      suggestion.setAttribute('aria-selected', false)
    )

    if (item) {
      item.setAttribute('aria-selected', true)
      this.dom.$searchInput.setAttribute('aria-activedescendant', item.id)
    } else {
      this.dom.$searchInput.removeAttribute('aria-activedescendant')
    }
  }

  handleSearchFieldKeyup(e) {
    const links = this.dom.$resultsList.querySelectorAll('a')

    if (
      document.activeElement === this.dom.$searchInput &&
      e.keyCode === DOWN &&
      links
    ) {
      links[0].focus()
    }
  }

  handleResize() {
    this.searchInputWidth()
  }

  handleScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop
    if (window.pageYOffset > 100) {
      if (st > this.lastScrollTop) {
        if (!this.el.classList.contains('header--scroll-down')) {
          this.el.classList.add('header--scroll-down')
        }
      } else {
        if (this.el.classList.contains('header--scroll-down')) {
          this.el.classList.remove('header--scroll-down')
        }
      }
      this.lastScrollTop = st <= 0 ? 0 : st
    } else {
      this.el.classList.remove('header--scroll-down')
    }
  }
}

export default Header
