import { Link } from 'react-router'
import PageTitle from '../../shared/ui/PageTitle/PageTitle'
import StatusMessage from '../../shared/ui/StatusMessage/StatusMessage'
import { ROUTES } from '../../shared/config/routes'

const NotFoundPage = () => {
  return (
    <>
      <PageTitle>Ой! Страница не найдена :((</PageTitle>
      <StatusMessage>
        <Link to={ROUTES.categories}>Вернуться к категориям</Link>
      </StatusMessage>
    </>
  )
}

export default NotFoundPage
