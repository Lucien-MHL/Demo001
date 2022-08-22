import React, { useContext } from 'react'
import permissionSingle from '../fakeAPI/fake_permission_single'
import styles from '../sass/components/currentStationNav.module.scss'
import { obj } from '../reducer/a'

function CurrentStationNav() {
  const { SingleStationSwitch } = obj
  const { active, setActive } = useContext(SingleStationSwitch)
  function handle(e) {
    setActive(e.target.value)
  }

  return (
    <div className={styles.single_navbar}>
      <nav className={styles.group}>
        {permissionSingle.map((item) => (
          <button
            type='button'
            className={active === item.id ? styles.item_active : styles.item}
            key={item.id}
            value={item.id}
            onClick={handle}
          >
            {item.name}
          </button>
        ))}
      </nav>
      <section> </section>
    </div>
  )
}

export default CurrentStationNav
