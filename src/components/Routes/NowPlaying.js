import React from 'react'
import '../Styles/NowPlaying.css'

import { nowPlaying } from '../../api'
import SharedResults from './SharedResults'

const NowPlaying = () => <SharedResults url={nowPlaying} />

export default NowPlaying
