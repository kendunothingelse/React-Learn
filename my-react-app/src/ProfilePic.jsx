function ProfilePic() {
    const imgUrl = './src/assets/BLue.webp';
    const handleClick = (e) => e.target.style.display = "none";
    return (
        <>
            <img onClick={(e) => handleClick(e)} src={imgUrl} alt="" />
        </>
    );
}
export default ProfilePic