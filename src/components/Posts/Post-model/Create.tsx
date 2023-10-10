import React, { memo, useState } from 'react'
import { useAppSelector } from 'src/hooks/useRedux'
import withBaseComponent from 'src/hooks/withBaseComponent'
import IHocProps from 'src/interfaces/hoc.interface'

interface Props extends IHocProps {
  textContent?: string
  selectedImage?: string
  selectedVideo?: string
}
function Create({ selectedImage }: Props) {
  const { gifIsOpen } = useAppSelector((state) => state.modal)
  // const { imgPost, videoPost, gifUrl, privacy } = useAppSelector((state) => state.post)
  const [loading, setLoading] = useState(false)
  const [isVideo, setIsVideo] = useState(false)
  const [postImage, setPostImage] = useState('')
  const [textAreaBg, setTextAreaBg] = useState(['#fff', '#1B1D2A'])
  const [postData, setPostData] = useState({
    post: '',
    bgColor: '',
    feelings: '',
    profilePicture: '',
    gifUrl: '',
    privacy: '',
    imgPost: '',
    videoPost: ''
  })

  return <div>
    
  </div>
}

export default withBaseComponent(memo(Create))
