import React, { useEffect } from 'react'
import { useAppDispatch, useTypedSelector } from '../hooks/useTypedSelector'
import { fetchUsers } from '../store/action-creators/user'

const UserList: React.FC = () => {
  const { users, isLoading, error } = useTypedSelector(state => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (isLoading) {
    return <h1>Is loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user => (
        <div key={user.name}>{user.name}</div>
      ))}
    </div>
  )
}

export default UserList