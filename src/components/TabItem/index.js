import './index.css'

const TabItem = props => {
  const {tabItem, selectTab, isActiveTab} = props
  const {tabId, displayText} = tabItem
  const btnClass = isActiveTab ? 'active-tab' : ''

  const changeTab = () => {
    selectTab(tabId)
  }

  return (
    <li>
      <button
        className={`tab-item ${btnClass}`}
        type="button"
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
