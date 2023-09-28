import {MultiChatSocket,MultiChatWindow,useMultiChatLogic,useSingleChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('026e428b-af46-491c-96ef-5a0fe9234d4b', props.user.username, props.user.secret );
    return (
        <div style={{ height: '100 vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100vh'}} />
        </div>
)
    }
export default ChatsPage