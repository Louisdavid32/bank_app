import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'


import React from 'react'


const Home = () => {


  const loggedIn = {firstName: 'Louis David', lastName:'Omgba', email:'omgbal78@gmail.com'};

  return (
    <section className='home'>

      <div className='home-content'>
        <header className='home-header'>

              <HeaderBox
                type='greeting'
                title='Welcome'
                user={loggedIn?.firstName || 'Guest'}
                subtext = "Acceder et gerer votre compte efficacement."
              />

              <TotalBalanceBox

                accounts={[]}
                totalBanks = {1}
                totalCurrentBalance = {2250.125}
              />
        </header>
          Transacton Recente
      </div>

      <RightSidebar
      user = {loggedIn}
      transactions ={[]}
      banks = {[{currentBalance:123.600},{currentBalance:350.160}]}
      />
    </section>
  )
}

export default Home