import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = props => {
  const {text, handler} = props
  return (
    <button onClick={handler}>{text}</button>
  )
}

const GiveFeedback = props =>{
	const {setGood, setNeutral, setBad} = props
	return (
	<div>
	 <h2>give feedback</h2>
            <Button handler={setGood} text="good" />
            <Button handler={setNeutral} text="neutral" />
            <Button handler={setBad} text="bad" />
	</div>
	)
}

const Statistics = props => {
	const {good, neutral, bad} = props
	const total = good + bad + neutral 
	if(total === 0) {
		return (
		<div>
		    <h2>statistics</h2>
		    <p>No statistics given</p>
		</div>
		)
	}
	
	return (
	<div>
	    <h2>statistics</h2>
	    <table>
	            <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
					<Statistic text="total" value={total} />
                    <Statistic text="average" value={(good - bad) / total} />
                    <Statistic text="positive" value={(good / total) * 100 + " %"} />
				</tbody>
		</table>
	</div>
	)
}

const Statistic = props => {
    const { text, value } = props

    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}
 
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <GiveFeedback setGood={() => setGood(good + 1)}
	  setNeutral={() => setNeutral(neutral +1)}
	  setBad={() => setBad(bad +1)} />
	  <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)