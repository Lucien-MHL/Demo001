import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../sass/stations.module.scss'

function Stations() {
  const stations = useSelector((state) => state.stations.sessionStations)

  return (
    <div className={styles.contain}>
      {stations &&
        stations.map((item) => (
          <Link
            key={item.zoneId}
            to={`singleStation_${item.zoneId}`}
            className={styles.card}
          >
            <ul className={styles.text}>
              <li>{`案場名稱: ${item.zoneName}`}</li>
              <li>{`裝置容量: ${item.dcc}`}</li>
              <li>{`案場類型: ${item.type.name}`}</li>
              <li>{`地區: ${item.region.name}`}</li>
            </ul>
            <img className={styles.pic} src={item.photo} alt='' />
          </Link>
        ))}
    </div>
  )
}

export default Stations
