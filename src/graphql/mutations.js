/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestions = /* GraphQL */ `
  mutation CreateQuestions(
    $input: CreateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    createQuestions(input: $input, condition: $condition) {
      id
      user_id
      question_text
      choice_1
      choice_2
      choice_1_votes
      choice_2_votes
      is_active
      created_at
      updated_at
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateQuestions = /* GraphQL */ `
  mutation UpdateQuestions(
    $input: UpdateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    updateQuestions(input: $input, condition: $condition) {
      id
      user_id
      question_text
      choice_1
      choice_2
      choice_1_votes
      choice_2_votes
      is_active
      created_at
      updated_at
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteQuestions = /* GraphQL */ `
  mutation DeleteQuestions(
    $input: DeleteQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    deleteQuestions(input: $input, condition: $condition) {
      id
      user_id
      question_text
      choice_1
      choice_2
      choice_1_votes
      choice_2_votes
      is_active
      created_at
      updated_at
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
