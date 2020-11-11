import React from 'react'

import { Cards, Chart, CountryPicker } from './components'
import './App.css'
import { fetchData } from './api'
import logo from './components/images/covid-19.png'

class App extends React.Component {

  state = {
     data: {},
     country:'',
  }
  
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  
  render() {

    const { data, country } = this.state;

   return ( 
    <div>
        <header><img className="header__logo" src={logo} alt="covid-19 logo"/></header>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
    </div>)
  }
}

export default App
