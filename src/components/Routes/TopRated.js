import React from 'react'

import { topRated } from '../../api'
import SharedResults from './SharedResults'

const TopRated = () => <SharedResults url={topRated} />

export default TopRated
