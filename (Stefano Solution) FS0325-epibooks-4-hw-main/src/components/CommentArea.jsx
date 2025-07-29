import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    // questo if serve a saltare il PRIMO GIRO
    // la prima esecuzione a vuoto (con asin === null) automaticamente
    // azionata dallo useEffect
    if (asin) {
      setIsLoading(true)
      fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWIwMjViMjYxNTAwMTk4YTY5NmEiLCJpYXQiOjE3NTM4MDE2NDAsImV4cCI6MTc1NTAxMTI0MH0.m20wZO_k9PxjoATL6SRz0MtDZNn6I3KkAvfwT7yVyKA',
        },
      })
        .then((response) => {
          console.log(response)
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('errore nella fetch')
          }
        })
        .then((comments) => {
          setComments(comments)
          setIsLoading(false)
          setIsError(false)
        })
        .catch((error) => {
          console.log(error)
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [asin])

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
