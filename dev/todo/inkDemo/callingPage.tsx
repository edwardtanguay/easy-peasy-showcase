const collectButtonForInkDemo = () => {
	return <button onClick={() => collectibleAndNotifyByIdCode()}>Collect "Opportunity Cost"</button>
}
					   
                       <h3>Interactive Conversation Demo with Ink</h3>
                       <Box sx={{ marginLeft: '1rem', backgroundColor: '#aaa', padding: '1rem', borderRadius: '.5rem' }}>
                           <div className='inkDemoWrapper'>
                               <img src="img/demoInk/professor.png" className='imgDemoInkProfessor' />
                               <div className='conversationArea'>
                                   <InkDemo jsx={collectButtonForInkDemo()} />
                               </div>
                           </div>
                       </Box>
