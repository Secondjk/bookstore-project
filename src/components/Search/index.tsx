import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { CatalogStore } from 'store/CatalogItemsStore';

interface SearchProps {
  className?: string
}

export const Search: React.FC<SearchProps> = (x) => {
  return (
    <Form.Row className={x.className}>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <BiSearch />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
              type="text"
              placeholder="Поиск по каталогу.."
              onChange={(e) => CatalogStore.filterTitle(e.target.value)}
        />
      </InputGroup>
    </Form.Row>
  );
};