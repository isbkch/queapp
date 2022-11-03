/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestions = /* GraphQL */ `
  query GetQuestions($id: ID!) {
    getQuestions(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
