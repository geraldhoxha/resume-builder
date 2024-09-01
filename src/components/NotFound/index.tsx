import {Button, Result} from 'antd'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited dowes not exist.'
        extra={<Button type='primary'><Link to='/'>Back Home</Link></Button>}
      />
    </div>
  )
}
