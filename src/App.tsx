import { useState } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCustomerStore = create(
  persist(
    set => ({
      customerAmount: 10,
      increaseCustomer: () =>
        set((state: any) => ({
          customerAmount: state.customerAmount + 1,
        })),
      decreaseCustomer: () =>
        set((state: any) => ({
          customerAmount: state.customerAmount - 1,
        })),
    }),
    {
      name: 'customerAmount-storage',
    }
  )
)

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {totalCustomer}
      <button className="bg-blue-100 p-3" onClick={() => increaseCustomer()}>
        +
      </button>

      <button className="bg-blue-100 p-3" onClick={() => decreaseCustomer()}>
        -
      </button> */}
    </>
  )
}

export default App
