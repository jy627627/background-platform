const buttonComponent = () => {
    const handleCLick = () => {
        console.log(' %c 🐱✨ 1: ','font-size:20px;background-color: #42b983;color:#fff;', 1)
    }
    return (
        <button onClick={handleCLick}  className="w-[100px] h-[60px] bg-red-400">click</button>
    )
}

export default buttonComponent
