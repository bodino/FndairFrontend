import { useSignMessage } from 'wagmi'
import { verifyMessage } from 'ethers/lib/utils'
import { useState } from 'react'

export function SignMessage() {
  const [message, setMessage] = useState()
  const [{ data, error, isLoading },signMessage] = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      console.log(data);
      const address = verifyMessage(variables.message, data)
    },
  })
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const message = formData.get('message')
        signMessage({ message })
      }}
    >
      <label htmlFor="message">Enter a message to sign</label>
      <textarea
        id="message"
        name="message"
        placeholder="The quick brown fox…"
        // eslint-disable-next-line no-undef
        onChange={(event) => setMessage(event.target.value)}
      />
      <button disabled={isLoading}>
        {isLoading ? 'Check Wallet' : 'Sign Message'}
      </button>

      {data && (
        <div>
          
          <div>Signature: {data}</div>
        </div>
      )}

      {error && <div>{error.message}</div>}
    </form>
  )
}