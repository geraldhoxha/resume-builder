import {Carousel} from 'antd'

export const ContentHeader = () => {
  const onChange = (currentSlide: number) => {
    console.log(">>", currentSlide)
  }
  return (
    <Carousel style={{background: "#f1f1f1"}} afterChange={onChange}>
      <div>
      </div>
      <div>
      </div>
      <div>
      </div>
    </Carousel>
  )
}
