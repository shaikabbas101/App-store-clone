import './index.css'

const AppItem = props => {
  const {data} = props
  const {imageUrl, appName} = data
  return (
    <li className="app-list-item">
      <img alt={appName} className="app-img" src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
