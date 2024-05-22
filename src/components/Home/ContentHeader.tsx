import {Carousel} from 'antd'
import { First } from './CarouselItems/First'

export const ContentHeader = () => {
  const onChange = (currentSlide: number) => {
    console.log(">>", currentSlide)
  }
  return (
    <Carousel style={{background: "#f1f1f1"}} afterChange={onChange}>
      <First mainMode='dark' />
      <div>
      </div>
      <div>
      </div>
    </Carousel>
  )
}
