import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItems from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'income',
    isActive: false,
    appointmentsList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  fun = () => {
    const {balance, income, expenses} = this.state
    const url = [
      {
        id: v4(),
        name: 'Your Balance',
        image:
          'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
        style: 'balance',
        testid: 'balanceAmount',
        paisal: balance,
      },
      {
        id: v4(),
        name: 'Your Income',
        image:
          'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
        style: 'income',
        testid: 'incomeAmount',
        paisal: income,
      },
      {
        id: v4(),
        name: 'Your Expenses',
        image:
          'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
        style: 'expenses',
        testid: 'expensesAmount',
        paisal: expenses,
      },
    ]
    return url
  }

  tV = e => {
    console.log(e.target.value)
    this.setState({title: e.target.value})
  }

  aV = e => {
    console.log(e.target.value)
    this.setState({amount: e.target.value})
  }

  oV = e => {
    console.log(e.target.value)
    this.setState({type: e.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newAppointment = {
      id: v4(),
      title1: title,
      amount1: amount,
      type1: type,
    }

    if (type === 'income') {
      this.setState(prevState => ({
        income: prevState.amount,
      }))
      this.setState(prevState => ({
        balance: prevState.income - prevState.expenses,
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        expenses: amount,
      }))
      this.setState(prevState => ({
        balance: prevState.income - prevState.expenses,
      }))
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],

      title: '',
      amount: '',
      type: '',
      isActive: true,
    }))
    console.log()
  }

  del = card => {
    const {title, amount, type} = this.state
    const {appointmentsList} = this.state
    const k = appointmentsList.filter(each => each.id === card)
    this.setState({appointmentsList: k})
    if (type === 'Expenses') {
      this.setState(prevState => ({
        expenses: prevState.expenses - prevState.expenses,
        balance: prevState.income - prevState.expenses,
      }))
    }
  }

  render() {
    const {title, amount, type, isActive, appointmentsList} = this.state
    console.log(appointmentsList)

    const listttt = this.fun()

    return (
      <div className="bg-container">
        <div className="section1">
          <h1 className="main-heading">Hi, Richard</h1>
          <p>
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <ul className="unorder">
          {listttt.map(each => (
            <MoneyDetails items={each} key={each.id} />
          ))}
        </ul>
        <div className="unorder">
          <form className="section3" onSubmit={this.onAddAppointment}>
            <h1 className="main-heading">Add Transaction</h1>
            <label htmlFor="TITLE">TITLE</label>
            <input
              type="text"
              className="input"
              placeholder="TITLE"
              id="TITLE"
              onChange={this.tV}
              value={title}
            />
            <label htmlFor="AMOUNT">AMOUNT</label>
            <input
              type="text"
              className="input"
              placeholder="AMOUNT"
              id="AMOUNT"
              onChange={this.aV}
              value={amount}
            />
            <label htmlFor="TYPE">TYPE</label>
            <select className="input" onChange={this.oV} value={type}>
              <option
                id={transactionTypeOptions[0].optionId}
                value={transactionTypeOptions[0].optionId}
              >
                {transactionTypeOptions[0].displayText}
              </option>
              <option
                id={transactionTypeOptions[1].optionId}
                value={transactionTypeOptions[1].optionId}
              >
                {transactionTypeOptions[1].displayText}
              </option>
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="section3">
            <h1 className="main-heading">History</h1>
            <ul>
              <li className="unorder table-row" type="none">
                <p className="table-cell name-column">Title</p>
                <hr className="separator" />
                <p className="table-cell name-column">Amount</p>
                <hr className="separator" />
                <p className="table-cell name-column">Type</p>
              </li>
            </ul>

            {isActive && (
              <ul>
                {appointmentsList.map(each => (
                  <TransactionItems all={each} key={each.id} dell={this.del} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
