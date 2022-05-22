import s from './App.module.scss'

export const App = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>Header</div>
      <div className={s.content}>Content</div>
      <div className={s.footer}>Footer</div>
    </div>
  )
}