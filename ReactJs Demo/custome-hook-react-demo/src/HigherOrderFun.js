const HigherOrderFun = (ChildComponent) => {

    const NewComponent = () => {
        return (
            <>
                <div style={{ background: 'pink' }}>
                    <ChildComponent name="Pritam Ray"/>
                </div>
            </>
        )
    }

    return NewComponent;

}

export default HigherOrderFun;