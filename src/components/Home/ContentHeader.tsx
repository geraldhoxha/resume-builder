import { Carousel } from 'antd'
import { First } from './CarouselItems/First'
import '../../styles/Carousel/CarouselItem.scss'

export const ContentHeader = () => {
  const onChange = (currentSlide: number) => {
    console.log(">>", currentSlide)
  }
  return (
    <Carousel
      draggable
      className="carousel-items"
      afterChange={onChange}
    >
      <First className="carousel-child" mainMode='dark' />
      <div>
      </div>
      <div>
      </div>
    </Carousel>
  )
}
