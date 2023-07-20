// import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';

function App() {
  const user = {
    name: 'ABDOULF HITFILYAH',
    imageUrl: "https://m.media-amazon.com/images/I/81oG0iM4BVL._AC_UF1000,1000_QL80_.jpg",
    imageSize: 90,
    moto: "Say No To Racism",
    description: '"The world does not tolerate weakness" (Fuhrer)'
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="box">
            <div>
              <img
                src={user.imageUrl} 
                className="avatar"
                alt={"Photo of " + user.name}
                style={{
                  width: user.imageSize,
                  height: user.imageSize
                }}
                />
                <h2 className='name'>{user.name}</h2>
                <strong>{user.moto}</strong>
                <p>{user.description}</p>
                <MyButton />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
