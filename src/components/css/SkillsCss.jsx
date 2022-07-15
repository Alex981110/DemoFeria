import React from 'react'
import * as Styles from './SkillsCss.module.css'

const SkillsCss = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.item + " " + Styles.item1}>1</div>
        <div className={Styles.item + " " + Styles.item2}>2</div>
        <div className={Styles.item + " " + Styles.item3}>3</div>
        <div className={Styles.item + " " + Styles.item4}>4</div>
        {/* <div className={Styles.item + " " + Styles.item5}>5</div>
      <div className={Styles.item + " " + Styles.item6}>6</div>
      <div className={Styles.item + " " + Styles.item7}>7</div>
      <div className={Styles.item + " " + Styles.item8}>8</div>
      <div className={Styles.item + " " + Styles.item9}>9</div> */}
      </div>
      <div className={Styles.container2}>
        <div className={Styles.item + " " + Styles.item1}>1</div>
        <div className={Styles.item + " " + Styles.item2}>2</div>
        <div className={Styles.item + " " + Styles.item3}>3</div>
        <div className={Styles.item + " " + Styles.item4}>4</div>
      </div>
    </>
  )
}

export default SkillsCss