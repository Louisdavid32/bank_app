"use client"

import React from 'react'
import AnimatedCounter from '@/components/AnimatedCounter'
import DoughnutChart from '@/components/DoughnutChart'


const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps) => {
  return (
         
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart  accounts = {accounts}/>
        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                Compte Bancaires :{totalBanks}
            </h2>

            <div className='flex flex-col gap-2'>
                <p className='total-balance-label flex-center'>
                    Solde Total
                </p>
                    <AnimatedCounter amount={totalCurrentBalance}/>
            </div>
        </div>

       

    </section>
  )
}

export default TotalBalanceBox
