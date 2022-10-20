import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';
import './styles/global.css';

export function App() {

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-200'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading className='mt-8' size='lg'>
          Ignite Lab
        </Heading>
        <Text size="lg" className='text-gray-400 mb-8'>
          Welcome! back!
        </Text>
      </header>
      <form className='flex flex-col items-stretch w-full max-w-[400px] gap-4'>
        <label htmlFor='email' className='flex flex-col gap-2'>
          <Text className='font-semibold'>Email address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='cabytes@example.com'/>
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-2'>
          <Text className='font-semibold'>Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id='password' placeholder='********'/>
          </TextInput.Root>
        </label>
        <label htmlFor='checkbox' className='flex items-center gap-2'>
          <Checkbox id='checkbox'/>
          <Text size='sm' className='text-gray-200'> Remember for 30 days</Text>
        </label>
        <Button type="submit" className='mt-4'>Sign In</Button>
        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text size="sm" className='text-gray-600 underline hover:text-gray-400'> Forgot password</Text >
          <Text size="sm" className='text-gray-600 underline  hover:text-gray-400'>Do you have an account? Sign up!</Text >

        </footer>

      </form>
    </div>
  )
}

