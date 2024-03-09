import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { api } from '~/utils/api'

const Page = () => {
  const router = useRouter()
  const [amount, setAmount] = React.useState('')
  const [name, setName] = React.useState('')

  const {data, isLoading, error, refetch} = api.expenses.getAll.useQuery()
  const mutation = api.expenses.create.useMutation({
    onSuccess: () => {
      refetch()
    }
  })
  const deleteMutation = api.expenses.delete.useMutation({
    onSuccess: () => {
      refetch()
    }
  })
  
  const [expenses, setExpenses] = useState<any>();
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [totalExpense, setTotalExpense] = useState(0);
  
  useEffect(() => {
    if (data) {
      setExpenses(data);
    }
  }, [data]);

  function handleAdd() {
    mutation.mutate({
      amount: Number(amount),
      name: name,
      date: new Date(),
    })
  }  

  function handleDelete(id: number) {
    deleteMutation.mutate({
      id: id 
    })
  }

  useEffect(() => {
    calculateTotalExpense();
  }, [expenses, selectedPeriod]);


  const calculateTotalExpense = () => {
    let total = 0;
    const currentDate = new Date();
    if (!expenses) return;
    expenses.forEach((expense : any) => {
      const expenseDate = new Date(expense.date);
      const timeDifference = currentDate.getTime() - expenseDate.getTime();

      if (selectedPeriod === 'month' && timeDifference <= 30 * 24 * 60 * 60 * 1000) {
        total += expense.amount;
      } else if (selectedPeriod === 'week' && timeDifference <= 7 * 24 * 60 * 60 * 1000) {
        total += expense.amount;
      } else if (selectedPeriod === 'year' && currentDate.getFullYear() === expenseDate.getFullYear()) {
        total += expense.amount;
      }
    });

    setTotalExpense(total);
  };


  return (
    <main className='min-h-screen w-full flex flex-col gap-4 items-center p-4 justify-center'>
      <div className='max-w-3xl flex flex-col gap-4'>
        <div className='flex gap-4 flex-row justify-center items-center'>
          <p className='text-xl'>Expenses this <span><select onChange={(e) => setSelectedPeriod(e.currentTarget.value)} className='select mx-2 max-w-xs inline-block' value={selectedPeriod}>
            <option value="year">Year</option>
            <option value="month" selected>Month</option>
            <option value="week">Week</option>
          </select></span>:</p>
          <p className='text-xl font-bold'>{totalExpense} PKR</p>
        </div>
        <div className="divider divider-primary"></div> 
        {
          // add new 
        }
        <div className='flex flex-row gap-4 justify-center items-center'>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Expense Description</span>
            </div>
            <input type="text" className="input input-bordered w-full max-w-xs input-primary" onChange={(e) => setName(e.currentTarget.value)}/>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Expense Amount</span>
            </div>
            <input type="text" className="input input-bordered w-full max-w-xs input-primary" onChange={(e) => setAmount(e.currentTarget.value)}/>
          </label>
          <button className='btn btn-primary self-end' onClick={handleAdd}>Add</button>
        </div>
        <div className="divider divider-primary"></div> 
        {
          // list
        }
        <div className='flex flex-col items-center w-full'>
          <div className='flex flex-row gap-4 border-b py-2 border-primary w-full items-center font-bold'>
            <p className="basis-2/5">Description</p>
            <p className="basis-1/5">Amount</p>
            <p className="basis-1/5">Date</p>
            <p className="basis-1/5">Action</p>
          </div>

          {
            data?.map((expense) => (
              <div key={expense.id} className='flex flex-row gap-4 border-b py-2 px-2  border-primary hover:cursor-pointer hover:bg-primary  w-full items-center'>
                <p className="basis-2/5">{expense.name}</p>
                <p className="basis-1/5">{expense.amount}</p>
                <p className="basis-1/5">{expense.date.toDateString()}</p>
                <p className="basis-1/5">
                  <button className='btn btn-secondary' onClick={() => handleDelete(expense.id)}>Delete</button>
                </p>
              </div>
            ))
          }
          {
            isLoading && <p>Loading...</p>
          }
          {
            error && <p>Error: {error.message}</p>
          }
        </div>
      </div>
    </main>
  )
}

export default Page
