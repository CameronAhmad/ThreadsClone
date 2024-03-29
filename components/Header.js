const Header = () => {
    return (
    <header>
      <div className="info-container">
          <div className="user-info-container">
            <h1>username</h1>
            <p>handle<span className="threads-info">threads.net</span></p>
          </div>
          <div className="img-container">
            <img src="" alt="profile avatar"/>
            </div>
          </div>
          <p>bio</p>
          <div className="sub-info-container">
            <p className="sub-text"> X followers • <a href="">link</a></p>
            </div>

            <button 
            className="main"
            onClick={() => navigator.clipboard.writeText('I am a URL')}>
            Edit Profile
            </button>
            
            <button 
            className="main"
            onClick={() => navigator.clipboard.writeText('I am a URL')}>
            Share Profile
            </button>
            
            <div className="button-container">
              <button className="current">Threads</button>
              <button>Replies</button>

            </div>
    </header> 
    )
  }
  
  export default Header