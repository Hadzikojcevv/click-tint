import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider'

type FancyImageProps = {
  imageOne: string
  imageTwo: string
}

const FancyImage = ({ imageOne, imageTwo }: FancyImageProps) => {
  return (
    <div>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage width={640} height={340} src={imageOne} alt='Image two' className='exampleImagesDimensions'/>}
        itemTwo={<ReactCompareSliderImage src={imageTwo} width={640} height={340} alt='Image one' className='exampleImagesDimensions'/>}
      />
    </div>
  )
}

export default FancyImage
