import bluePic from './assets/Blue.webp'
function Card(){
    const styles ={
        backgroundColor:" rgb(12, 77, 52)",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
    }
    return(
        <div className="card">
            <img className='card-image' src={bluePic} alt="profile picture" />
            <h2 className='card-title'>Ken code</h2>
            <p className='card-text'>I am a student of NLU. </p>
            <button style={styles} className='card-button'>Click here!</button>
        </div>
    );
}
export default Card