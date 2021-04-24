import Image from 'next/image'
import { bgWrap, bgText } from '../styles/styles.module.css'

const Background = () => (
  <div>
    <div className={bgWrap}>
      <Image
        alt="mflix main"
        src="/images/main.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <div className={bgText}>
      M-Flix
    </div>
  </div>
)

export default Background

