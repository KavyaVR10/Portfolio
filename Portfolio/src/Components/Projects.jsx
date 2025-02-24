import './css/project.css'
function Project() {
  return (
    <div className="project">
      <h1 className='hp'>Projects</h1>
      <div className='grid'>
      <div class="card">
        <img className="imgp" src="/heart.png" alt="Avatar"></img>
        <div class="container">
          <h4><b>Heart Disease prediction</b></h4>
          <p className='des'>This project is using machine learning algorithm that allows users to input their 
             health conditions like bp,sugar,heart rate etc...,using many algorithms the model predicts the outcome of 
              user heartattack and provides the report</p>
        </div>
      </div>
      <div class="card">
        <img className="imgp" src="/chatbot.jpg" alt="Avatar"></img>
        <div class="container">
          <h4><b>Medical chatbot</b></h4>
          <p className='des'>The Medical chatbot which provides the information about the medicines and provides
             guidelines of firstaid.The User enters the namme of medicines and it displays the medicine info of what is effect of intake of
             that medicine,When to use and dosage of that medicine.</p>
        </div>
      </div>
      <div class="card">
        <img className="imgp" src="/credit.jpg" alt="Avatar"></img>
        <div class="container">
          <h4><b>Credit card fraud detection</b></h4>
          <p className='des'>Credit card fraud detection involves identifying unauthorized or suspicious 
            transactions on a cardholder's account. It uses algorithms like machine learning to analyze
             spending patterns and detect anomalies. Common techniques include rule-based systems, predictive
              modeling, and neural networks. Data such as transaction history, location, and spending behavior 
              are analyzed. The goal is to prevent fraud by flagging suspicious activities in real-time or near real-time.</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Project;