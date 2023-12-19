'use client'

type ImageToglerProps = {
  handleTint: () => void
  lang: any
}

const ImageTogler = ({ handleTint, lang }: ImageToglerProps) => {
  return (
    <button
      onClick={handleTint}
      style={{
        position: 'absolute',
        bottom: '10%'
      }}
      className='rounded-3xl bg-white p-4 font-bold uppercase text-custom shadow-2xl transition-colors delay-75 ease-in-out hover:bg-custom hover:text-white'
    >
      {lang.home.banner.bannerBtn ?? 'Click'}
    </button>
  )
}

export default ImageTogler
