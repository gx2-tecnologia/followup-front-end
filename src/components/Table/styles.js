import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  #students {
    text-align: center;
    border-collapse: collapse;
    width: 100%;
  }

  #students td,
  #students th {
    border: 1px solid #ddd;
    padding: 10px;
    color: #7f7f7f;
    font-size: 13px;
  }
  #students th {
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
    background-color: #f5f5f5;
    color: #7f7f7f;
    font-weight: 600;
  }
  svg.Edit {
    cursor: pointer;
    color: rgba(0, 138, 152, 1);
    font-size: 22px;
  }

  svg.EditDisabled {
    cursor: not-allowed;
    color: rgba(214, 219, 229, 1);
    font-size: 22px;
  }

  svg.Delete {
    cursor: pointer;
    color: red;
    font-size: 22px;
  }

  svg.DeleteDisabled {
    cursor: not-allowed;
    color: rgba(214, 219, 229, 1);
    font-size: 22px;
  }
`;
