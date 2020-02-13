/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { Container } from './styles';
import { ButtonPrinter } from '../Buttons/ButtonPrinter';

import If from '../../components/Logic/If';
import { ButtonIcon } from '../../components/Grid/iconGrid';

export default function Table(props) {
  const { rows, columns, actions } = props;
  return (
    <Container>
      <table id="students">
        <thead>
          <tr>
            {columns.map(item => (
              <th key={item.field}>{item.title}</th>
            ))}
            <th>Nível</th>
            <th>Exp</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr>
              {columns.map(col => (
                <>
                  <If condition={col.field !== 'acoes'}>
                    <td key={col.field}>{row[col.field]}</td>
                  </If>
                </>
              ))}

              <td>
                <select name="Cidades">
                  <option value="nivel">0</option>
                  <option value="nivel">1</option>
                  <option value="nivel">2</option>
                  <option value="nivel">3</option>
                  <option value="nivel">4</option>
                  <option value="nivel">5</option>
                </select>
              </td>
              <td>
                <select name="Cidades">
                  <option value="exp">0</option>
                  <option value="exp">1</option>
                  <option value="exp">2</option>
                  <option value="exp">3</option>
                  <option value="exp">4</option>
                  <option value="exp">5</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
