import { Component } from '@verndale/core'
import Alert from './Alert'
import Cookies from 'js-cookie'

class Alerts extends Component {
  setupDefaults() {
    this.dom = {}
    this.getAlerts()
  }

  addListeners() {}

  displaySectionAlerts(alerts) {
    if (alerts.length < 1) {
      this.el.style.display = 'none'
      return
    }

    alerts
      .filter((alert) => {
        const closedAlerts = Cookies.get(this.el.dataset.cookieName)
        if (closedAlerts) {
          return !JSON.parse(closedAlerts).includes(alert.ID.Guid)
        }
        return true
      })
      .map((alert) => this.createAlertTemplate(alert))
      .forEach((element) => {
        this.el.appendChild(element)
      })
  }

  createAlertTemplate(alert) {
    const {
      AlertType,
      CanBeDismissed,
      Heading,
      LoadExpanded,
      Message,
      ValidFrom,
      ValidTo,
      ID
    } = alert
    const alertContainer = document.createElement('div')
    alertContainer.dataset.id = ID.Guid
    alertContainer.dataset.type = AlertType.DataId
    alertContainer.dataset.canDismiss = CanBeDismissed
    alertContainer.dataset.expanded = LoadExpanded
    alertContainer.dataset.cookieName = 'reusable'
    alertContainer.classList.add('alert')
    alertContainer.innerHTML = `
    <div class="container">
        <div class="alert__header">
            <h2 class="alert__heading">${Heading}</h2>
            <button type="button" class="alert__toggle">
                <span class="alert__hide">hide</span>
                <span class="alert__show">show</span>
                <svg viewBox="0 0 320 320">
                    <use xlink:href="#arrow-up" />
                </svg>
            </button>
            <button type="button" class="alert__close">
                close
                <svg viewBox="0 0 320 320">
                    <use xlink:href="#close" />
                </svg>
            </button>
        </div>
        <div class="alert__content">
            <div class="rtf">
                ${Message}
            </div>
        </div>
    </div>`
    new Alert(alertContainer)
    return alertContainer
  }

  getAlerts() {
    fetch(this.el.dataset.endpoint)
      .then((response) => {
        return response.json()
      })
      .then((alerts) => {
        this.displaySectionAlerts(alerts)
      })
  }
}

export default Alerts
