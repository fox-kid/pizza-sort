import { Container, Page, Typography } from '@toptal/picasso'
import { Form, Field } from 'react-final-form'
import MultiCheckboxInput from '../../components/MultiCheckboxInput'

import './styles.css'

type Props = {
  name: string
  price: number
  size: string
  delivery_time: number
  ingredients: string[]
  validate: (val: string) => string | undefined
  errors: any
}

const PizzaCreate = () => {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const onSubmit = async (values: Props) => {
    await sleep(300)
    window.alert(JSON.stringify(values))
  }

  return (
    <Container>
      <Page.TopBar title='Create new pizza' />
      <Page.Content>
        <Container direction='column' left='medium'>
          <Typography align='center' variant='heading' size='xlarge'>
            Create new pizza
          </Typography>

          <Form<Props>
            onSubmit={onSubmit}
            validate={(values): any => {
              const errors = {} as Props
              if (!values.name) {
                errors.name = 'Required'
              }
              if (!values.size) {
                errors.size = 'Required'
              }
              return errors
            }}
            render={({ handleSubmit, submitting, values }) => (
              <form onSubmit={handleSubmit}>
                <Field<string> name='name'>
                  {({ input, meta }) => (
                    <div>
                      <label>Name</label>
                      <input {...input} type='text' placeholder='Name' />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field<number> name='price'>
                  {({ input, meta }) => (
                    <div>
                      <label>Price</label>
                      <input {...input} type='number' placeholder='Price' />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field<string> name='size'>
                  {({ input, meta }) => (
                    <div>
                      <label>Size</label>
                      <input
                        {...input}
                        type='text'
                        placeholder='Size (S, M, L)'
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field<number> name='delivery_time'>
                  {({ input, meta }) => (
                    <div>
                      <label>Delivery time</label>
                      <input
                        {...input}
                        type='number'
                        placeholder='Delivery time'
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <div>
                  <label>Ingredients</label>
                  <div>
                    <label>
                      <Field<string>
                        name='ingredients'
                        component={MultiCheckboxInput}
                        type='checkbox'
                        value='basil'
                      />
                      Basil
                    </label>
                    <label>
                      <Field<string>
                        name='ingredients'
                        component='input'
                        type='checkbox'
                        value='boiled_ham'
                      />
                      Boiled ham
                    </label>
                    <label>
                      <Field<string>
                        name='ingredients'
                        component='input'
                        type='checkbox'
                        value='mozzarella'
                      />
                      Mozzarella
                    </label>
                    <label>
                      <Field<string>
                        name='ingredients'
                        component='input'
                        type='checkbox'
                        value='parmesan'
                      />
                      Parmesan
                    </label>
                    <label>
                      <Field<string>
                        name='ingredients'
                        component='input'
                        type='checkbox'
                        value='salami'
                      />
                      Salami
                    </label>
                    <label>
                      <Field<string>
                        name='ingredients'
                        component='input'
                        type='checkbox'
                        value='mushrooms'
                      />
                      Mushrooms
                    </label>
                    <label>
                      <Field<string>
                        name='ingredients'
                        component='input'
                        type='checkbox'
                        value='prosciutto'
                      />
                      Prosciutto
                    </label>
                  </div>
                </div>
                <div className='buttons'>
                  <button type='submit' disabled={submitting}>
                    Submit
                  </button>
                </div>
                <pre>{JSON.stringify(values, undefined, 2)}</pre>
              </form>
            )}
          />
        </Container>
      </Page.Content>
    </Container>
  )
}

export default PizzaCreate
