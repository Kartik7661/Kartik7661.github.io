import React from 'react';
import{ BsSearch} from 'react-icons/bs';
import {FcMoneyTransfer} from 'react-icons/fc';
import {GrDocumentText} from 'react-icons/gr';
import {GiWallet} from 'react-icons/gi';
import {FaShoppingBag} from 'react-icons/fa';
import {AiOutlineArrowDown,AiOutlineArrowUp} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown} from "react-icons/md";
import pic1 from "./img/download1.jpeg";
import pic2 from "./img/download2.jpeg";
import 
{ BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer }
from 'recharts';
import 
{ PieChart, Pie, Sector, Cell }
from 'recharts';


const data = [
  {
    name: 'Jan',
    uv: 600,
  },
  {
    name: 'Feb',
    uv: 1000,
  },
  {
    name: 'Mar',
    uv: 500,
  },
  {
    name: 'Apr',
    uv: 300,
  },
  {
    name: 'May',
    uv: 900,
  },
  {
    name: 'Jun',
    uv: 850,
  },
  {
    name: 'Jul',
    uv: 750,
  },
  {
    name: 'Aug',
    uv: 620,
  },
  {
    name: 'Sep',
    uv: 920,
  },
  {
    name: 'Oct',
    uv: 460,
  },
  {
    name: 'Nov',
    uv: 680,
  },
  {
    name: 'Dec',
    uv: 203,
  },
];

function Home(){

  

  const pdata = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
     return(

    
       <main className='main-container'>
            <div className='main-cards'>
                <div className='card'>

                    <FcMoneyTransfer className='card-icons1'/>
                        <div className='card-inner'>
                            <h3>Earning</h3>
                            
                          <h2>$198</h2>
                          <h5><span style={{color:'green'}}><AiOutlineArrowUp className='main-arrow'/>  37.8%</span> this month</h5>
                        </div>
                </div>

                <div className='card'>
                  <GrDocumentText className='card-icons2'/>
                    <div className='card-inner'>
                        <h3>Orders</h3>
                        
                        <h2>$2.4K</h2>

                        <h5 ><span style={{color:'red'}}><AiOutlineArrowDown className='main-arrow'/>2%</span> this month</h5>
                    </div>

                </div>

                <div className='card'>
                  
                  <GiWallet className='card-icons3'/>
                    <div className='card-inner'>
                        <h3>Balance</h3>
                        
                      <h2>$2.4K</h2>
                      <h5> <span style={{color:'red'}}><AiOutlineArrowDown className='main-arrow'/>2%</span> this month</h5>
                    </div>

                </div>

                <div className='card'>
                  <FaShoppingBag className='card-icons4'/>
                    <div className='card-inner'>
                        <h3>Total Sales</h3>
                        
                      <h2>$89K</h2>
                      <h5><span style={{color:'green'}}><AiOutlineArrowUp className='main-arrow'/>11% </span>this month</h5>
                    </div>

                </div>

            </div>
            <div className='charts'>
              <div className='chart1'>
                <div className='chart1-heading'>
                  <div className='chart1-heading-left'>
                    <h2>Overview</h2>
                    <h5>Monthly Earning</h5>
                  </div>
                  <div className='chart1-heading-right'>
                    Quantity <MdOutlineKeyboardArrowDown className="chart-right-arrow" />
                  </div>
                </div>
                  <ResponsiveContainer width="100%" height="80%">
                    <BarChart
                      width={50}
                      height={50}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                      
                    >
                      
                      <XAxis dataKey="name" />
                      <Bar dataKey="uv" fill="rgb(119, 130, 140)" radius={[10, 10, 5, 5]}/>
                    </BarChart>
                  </ResponsiveContainer>
              </div>
              <div className='chart2'>
                <div className='chart2-heading'>
                  <h2>Customers</h2>
                  <h5>Customers that buy products</h5>
                </div>
                <ResponsiveContainer width="100%" height="80%">
                  <PieChart width={400} height={400}>
                    <Pie data={pdata} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className='end' >
            <div className='end-header'>
              <h3>PRODUCT SELL</h3>
              <div className='end-header-search'>
                <BsSearch className='search'/>Search
            </div>
              <div className='end-right'>
                Last 30 days <MdOutlineKeyboardArrowDown className="end-right-arrow" />
              </div>
            </div>
              <table className='table'>
                  <thead>
                    <tr>
                      <th className='c1'>Product Name</th>
                      <th className='c2'>Stock</th>
                      <th className='c3'>Price</th>
                      <th className='c4'>Total Sale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    
                      <td className='c1'>
                          <img className="pics" src={pic1} alt="user pic"></img>
                        <div className='c1-div'>
                          <h4>Abstract 3D</h4>
                          lorem ipsum dotor sit 
                        </div>
                      </td>
                        <td className='c2'>32 in stock</td>
                        <td className='c3'>$ 45.99</td>
                        <td className='C4'>20</td>
                    </tr>
                    <tr>
                    
                      <td className='c1'>
                        <img className="pics" src={pic2} alt="user pic"></img>
                      <div className='c1-div'>
                        <h4>Illustration</h4>
                        lorem ipsum dotor sit 
                      </div>
                      </td>
                      <td className='C2'>32 in stock</td>
                      <td className='C3'>$ 45.99</td>
                      <td className='C4'>25</td>
                    </tr>
                    
                  </tbody>
                </table>

            </div>
       </main>
   );
}

export default Home