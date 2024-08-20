import React from 'react'
import { formatAmount } from "@/lib/utils"
import CountUp from 'react-countup'

const AnimatedCounter = ({amount} : {amount:number}) => {
  return (
    <div className='w-full total-balance-amount flex-center gap-2'>
        <CountUp
            decimals={1}
            duration={3.5}
            prefix='XAF'
            end={amount}
        />
    </div>
  )
}

export default AnimatedCounter
