import React from 'react'

import { discover } from '../../api'
import SharedResults from './SharedResults'

const Discover = () => <SharedResults url={discover} />

export default Discover
