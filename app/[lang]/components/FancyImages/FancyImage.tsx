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
        itemOne={<ReactCompareSliderImage src={imageOne} alt='Image two' />}
        itemTwo={<ReactCompareSliderImage src={imageTwo} alt='Image one' />}
      />
    </div>
  )
}

export default FancyImage
