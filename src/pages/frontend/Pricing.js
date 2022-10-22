import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PricingCard from './PricingCard'

import {fetchPlans} from '../../redux/feature/planSlice'
import Loading from '../../Loading'

function Pricing() {
  const {plans, loading, error} = useSelector((state) => state.plan);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlans());
  }, []);

  return (
    <div className="py-12 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">Pricing</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">Choose a QuickBook plan</p>
        </div>
        <div className="mt-10">
          <dl className="space-y-12 md:grid md:grid-cols-3  md:gap-y-10 md:space-y-0">
            {loading && <Loading/>}
            {!loading && error != '' ? <p className="text-3xl font-bold text-white text-center">Error: {error}</p> : null } 
            {!loading && plans.length ? plans.map((plan) => (
                <PricingCard key={plan._id} name={plan.title} price={plan.price} agent={plan.totalAgents} duration={plan.duration} products={plan.totalProducts} uniqueID={plan._id} />
            )) : null }
          </dl>
        </div>
        <div className="mt-10 flex items-center justify-center ">
          <Link to="/pricing" className="items-center justify-center rounded-md text-blue-700 focus:ring-4 focus:ring-blue-300 font-medium px-5 py-1 mr-2 mb-3 dark:bg-blue-300 dark:hover:bg-blue-200 focus:outline-none dark:focus:ring-blue-800">Start Your Free Trial</Link> 
        </div>
      </div>
    </div>
  )
}

export default Pricing
