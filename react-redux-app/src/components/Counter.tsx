import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/actions/counterActions'
import type { AppDispatch, RootState } from '../store/store'
import styles from './Counter.module.css'

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <section className={styles.counterPanel} aria-label="Redux counter">
      <div className={styles.panelHeader}>
        <span>STORE / COUNTER</span>
        <span className={styles.liveMark}><i /> LIVE</span>
      </div>
      <div className={styles.counterReadout} aria-live="polite">
        <span className={styles.valueLabel}>CURRENT VALUE</span>
        <output className={styles.value}>{count}</output>
      </div>
      <div className={styles.controls}>
        <button
          className={styles.stepButton}
          type="button"
          onClick={() => dispatch(decrement())}
          aria-label="Decrement count"
        >
          −
        </button>
        <button
          className={styles.stepButton}
          type="button"
          onClick={() => dispatch(increment())}
          aria-label="Increment count"
        >
          +
        </button>
      </div>
      <button
        className={styles.resetButton}
        type="button"
        onClick={() => dispatch(reset())}
      >
        Reset counter
      </button>
    </section>
  )
}

export default Counter