import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';
import Widgets from '../PageObjects/WidgetsPage';
import '@4tw/cypress-drag-drop';

const widgets = new Widgets();

const assetName = '';
let myUrl = '';
let textOnFilter;
let textOnSecondFilter;

Given('I login to ITG', () => {
  cy.login();
});

And('I click on the side menu button', () => {
  widgets.getOpenSideMenuButton().click();
});

And('I click on activate panel Button', () => {
  widgets.getActivatePanelButton().click();
});

And('I click on {string} button', (button) => {
  cy.contains(button).click();
});

And('I see {string} button', (button) => {
  cy.contains(button);
});

And('I see {string} text', (text) => {
  cy.contains(text);
});

And('I click on clear layout Button', () => {
  widgets.getClearLayoutButton().should('be.visible');
  widgets.getClearLayoutButton().click();
});

And('I create a {string} Widget', (widget) => {

  var value;

  switch (widget) {
  case 'Section':
    value = '0';
    break;
  case 'Heading':
    value = '1';
    break;
  case 'Image':
    value = '2';
    break;
  case 'WYSIWYG':
    value = '3';
    break;
  case 'Resource List':
    value = '4';
    break;
  case 'Button':
    value = '5';
    break;
  }

  widgets.getWidget().eq(value).drag(widgets.getblankArea(), { target: { position: 'top' }});
  cy.contains('Editing ' + widget).should('be.visible');
});

And('Left hand panel is shown', () => {
  widgets.getWidgetPanel().should('be.visible');
});

And('Left hand panel is titled {string}', (widgetTitle) => {
  widgets.getWidgetPanelTitle().should('have.text', widgetTitle);
});

And('I click on close button on Widget panel', () => {
  widgets.getWidgetPanelCloseBtn().click();
});

And('Widget Settings Panel is collapsed', () => {
  widgets.getWidgetSettingsPanel().should('not.exist');
});

And('I click on widget Settings Button', () => {
  widgets.getWidgetSettingsBtn().first().click();
});

And('I click on Editing mode button', () => {
  widgets.getOpenSideMenuButton().click();
  widgets.getEditingModeButton().click();
});

And('I see Editing mode button', () => {
  widgets.getEditingModeButton().should('be.visible');
});

And('I click on Close editor button', () => {
  widgets.getCloseSideMenuButton().click();
});

And('I update the widget title to {string}', (text) => {
  widgets.getWidgetTitleField().clear().type(text);
});

Then('widget title is set to {string}', (title) => {
  widgets.getWidgetTitleField().should('have.text', title);
});

And('Right hand panel is shown', () => {
  widgets.getEditingSectionPanel().should('be.visible');
});

And('Config panel is collapsed', () => {
  widgets.getWidgetSettingsPanel().should('not.exist');
});

And('Right hand panel is titled {string}', (widgetHeader) => {
  widgets.getEditingSectionPanelHeader().should('have.text', widgetHeader);
});

And('Widget is removed', () => {
  widgets.getActiveWidgetTitle().should('not.exist');
});

And('I select {string} widget Alignment on Config Panel', (alignment) => {
  cy.get(widgets.getWidgetAlignment().replace('value', alignment)).click();
});

And('I set the widget Width on Config Panel to {string}', (value) => {

  const currentValue = 100;
  const targetValue = 70;
  const increment = 1;
  const steps = (currentValue - targetValue) / increment;
  const arrows = '{leftarrow}'.repeat(steps);

  widgets.getConfigWidth().should('have.attr', 'aria-valuenow', currentValue).type(arrows);

  widgets.getConfigWidth().should('have.attr', 'aria-valuenow', value);
});

And('Widget is aligned to {string}', (alignment) => {
  if (alignment === 'Left') {
    alignment = 'margin: 0px;';
  } else if (alignment === 'Center') {
    alignment = 'margin: 0px auto;';
  } else if (alignment === 'Right') {
    alignment = '0px 0px 0px auto;';
  }

  widgets.getActiveWidget().should('have.attr', 'style')
    .and('contain', alignment);
});

And('Widget width is set to {string}', (value) => {
  widgets.getActiveWidget().should('have.attr', 'style')
    .and('contain', 'width: '+value+'%;');
});

And('All widgets are cleared', () => {
  widgets.getWidgets().should('have.length', 1);
});

And('Widget being edited is highlighted', () => {
  widgets.getActiveWidget().should('have.attr', 'class')
    .and('contain', 'is-active');
});

And('padding for widget is set to {string}', (spacing) => {
  widgets.getSectionWidget().should('have.attr', 'style')
    .and('contain', spacing+'px');
});

And('I set the {string} Spacing Option to {string}', (padding, value) => {

  const currentValue = 0;
  const targetValue = value;
  const increment = 5;
  const steps = (targetValue - currentValue) / increment;
  const arrows = '{leftarrow}'.repeat(steps);

  cy.contains(padding).click();
  widgets.getWidgetSpacingSlider().should('have.attr', 'aria-valuenow', currentValue).type(arrows);
  widgets.getWidgetSpacingSlider().should('have.attr', 'aria-valuenow', value);
});

Then('the {string} button style radio button is {string}', (button, option) => {
  if (button === 'Button') {
    widgets.getButtonButtonStyleRadioButton().should(`be.${option}`);
  }
});

Then('Open in New Tab option is {string}', (option) => {
  if (option === 'checked') {
    widgets.getOpenInTabCheckBox().should('be.checked');
  }
});

And('Destination URL is {string}', (url) => {
  widgets.getDestinationUrlInput().should('have.text', `${url}`);
});

When('I add {string} text to the widget', (text) => {
  widgets.getWidgetTextInput().type(text);
});

And('I set Destination URL to {string}', (url) => {
  widgets.getDestinationUrlInput().clear().type(url);
});

And('I {string} open in new tab checkbox', (checkOrUncheck) => {
  if (checkOrUncheck === 'check') {
    widgets.getOpenInTabCheckBox().check({force: true});
  } else {
    widgets.getOpenInTabCheckBox().uncheck({force: true});
  }
});

And('clicking {string} button opens url in the same tab', (text) => {
  cy.contains(text).should('have.attr', 'target', '_self');
});

And('clicking {string} button opens url in a new tab', (text) => {
  cy.contains(text).should('have.attr', 'target', '_blank');
});

And('I set the Font Size on Config Panel to {string}', (value) => {

  const currentValue = 24;
  const targetValue = 17;
  const increment = 1;
  const steps = (currentValue - targetValue) / increment;
  const arrows = '{leftarrow}'.repeat(steps);

  widgets.getFontSizeSlider().should('have.attr', 'aria-valuenow', currentValue).type(arrows);

  widgets.getFontSizeSlider().should('have.attr', 'aria-valuenow', value);
});

And('I select the font type {string}, {string}, {string}', (bold, italic, underline) => {
  if (bold === 'true') {
    widgets.getBoldFontButton().click();
  }

  if (italic === 'true') {
    widgets.getItalicFontButton().click();
  }

  if (underline === 'true') {
    widgets.getUnderlineFontButton().click();
  }
});

Then('Text {string} is shown on the widget with selected font size and type {string}, {string}, {string}', (freeText, bold, italic, underline) => {
  widgets.getHeadingWidgetContent().should('have.text', ' ' + freeText + ' ');
  widgets.getHeadingWidgetContent().should('have.css', 'font-size', '14px');

  if (bold === 'true') {
    widgets.getHeadingWidgetContent().should('have.css', 'font-weight', '700');
  }

  if (italic === 'true') {
    widgets.getHeadingWidgetContent().should('have.css', 'font-style', 'italic');
  }

  if (underline === 'true') {
    widgets.getHeadingWidgetContent().should('have.css', 'text-decoration-line', 'underline');
  }
});

Then('Asset count is listed on the Resource list widget', () => {
  widgets.getResourceListWidgetCount().contains('items found');
});

And('I enter {string} into the {string} input', (text, inputField) => {
  if (inputField === 'Resource List Search') {
    widgets.getResourceListSearchInput().clear().type(text);
  }
});

And('I click the search option', () => {
  widgets.getSearchOption().click();
});

And('{string} is displayed', (text)=> {
  cy.contains(text).should('be.visible');
});

And('I navigate to the last asset', () => {
  widgets.getAssetsInGrid().last().trigger('mouseover');
});

And('I click on the last asset', () => {
  widgets.getAssetsInGrid().last().click();
});

And('I click button based on aria-label {string}', (label) => {
  cy.get(widgets.getWidgetAlignment().replace('value', label)).click();
});

And('I click on Domain option on Toolbar', () => {
  widgets.getDomainOption().click();
});

And('I select {string} domain', (domain) => {
  widgets.getDomain().contains(domain).click();
});

And('I check the Include Sub Domains in results checkbox', () => {
  widgets.getIncludeSubDomains().click();
});

And('I check the Include Parent Domains in results checkbox', () => {
  widgets.getIncludeParentDomains().click();
});

Then('Load More pagination style is selected', () => {
  widgets.getLoadMorePaginationStyle().should('have.attr', 'class')
    .and('contain', 'mat-radio-checked');
});

And('Results per page config is {string}', (result) => {
  widgets.getResultsPerPageDropdown().should('have.text', result);
});

And('Results per page drop down has the below options', (dataTable) => {
  widgets.getResultsPerPageDropdown().click();
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(widgets.getResultsPerPageValues().replace('value', index +4)).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('Results per page should be {string} {string}', (string, value) => {
  let expectedCount = 0;

  switch (string) {
  case 'equal to':
    expectedCount = value;
    break;
  case 'twice':
    expectedCount = value * 2;
    break;
  case 'thrice':
    expectedCount = value * 3;
    break;
  }

  widgets.getAssetsInGrid().should('have.length', expectedCount);
});

Then('Grid View is set by default on Config Panel', () => {
  widgets.getGridCheckBox().should('have.attr', 'class')
    .and('contain', 'mat-radio-checked');
});

And('Resource List columns should have the below headings', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    widgets.getResourceListColumns().eq(index + 1).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('Assets on Resource List are shown in {string} view', (string) => {
  if (string === 'Grid') {
    widgets.getAssetsInGrid().should('be.visible');
  }
  if (string === 'List') {
    widgets.getAssetsInList().should('be.visible');
  }
});

And('I select {string} view as Search Result style', (string) => {
  if (string === 'List') {
    widgets.getListCheckBox().scrollIntoView().should('be.visible');
    widgets.getListCheckBox().click();
  }
  if (string === 'Grid') {
    widgets.getGridCheckBox().scrollIntoView().should('be.visible');
    widgets.getGridCheckBox().click();
  }
});

And('AssetName and AssetType are shown under the asset in Grid view', () => {
  widgets.getAssetName().should('be.visible');
  widgets.getAssetType().should('be.visible');
});

And('I click on the first AssetName in Asset {string} view', (view) => {
  if (view === 'Grid') {
    widgets.getAssetName().first().invoke('text').then(text => {
      cy.task('setVal', text);
      cy.contains(text).click();
    });
  } else if (view === 'List') {
    widgets.getAssetNameInList().first().invoke('text').then(text => {
      cy.task('setVal', text);
      cy.contains(text).click();
    });
  }
});

And('I click on the last AssetName in Asset {string} view', (view) => {
  if (view === 'Grid') {
    widgets.getAssetName().last().invoke('text').then(text => {
      cy.task('setVal', text);
      cy.contains(text).click();
    });
  } else if (view === 'List') {
    widgets.getAssetNameInList().last().invoke('text').then(text => {
      cy.task('setVal', text);
      cy.contains(text).click();
    });
  }
});

And('I see the Last asset in the asset {string} view', (view) => {
  cy.task('getVal').then((value) => {
    if (view === 'Grid') {
      widgets.getAssetName().last().invoke('text').then(text => {
        expect(text).to.eq(value);
      });
    } else if (view === 'List') {
      widgets.getAssetNameInList().last().invoke('text').then(text => {
        expect(text).to.eq(value);
      });
    }
  });
});

And('I see the First asset in the asset {string} view', (view) => {
  cy.task('getVal').then((value) => {
    if (view === 'Grid') {
      widgets.getAssetName().first().invoke('text').then(text => {
        expect(text).to.eq(value);
      });
    } else if (view === 'List') {
      widgets.getAssetNameInList().first().invoke('text').then(text => {
        expect(text).to.eq(value);
      });
    }
  });
});

Then('Asset Details Page opens with {string} as title', (title) => {
  cy.url().should('include', 'assetDetails');
  widgets.getAssetDetailTitle().should('have.text', title);
});

And('{string} Asset Type is displayed on Asset Details page', (type) => {
  cy.url().should('include', 'assetDetails');
  widgets.getAssetDetailsType().invoke('text').should('eq', type);
});

And('Asset Preview is displayed on Asset Details page', () => {
  widgets.getAssetPreview().should('be.visible');
});

And('URL captures Asset Details page', () => {
  cy.url().then(url => {
    myUrl = url;
  });
});

And('I am on same page on refreshing the page', () => {
  cy.reload();
  cy.url().should('include', myUrl);
});

And('I click on Browser Back button', () => {
  cy.go('back');
});

And('I see the first asset on Asset {string} view', (view) => {
  let firstAsset;
  if (view === 'Grid') {
    widgets.getAssetName().first().should('be.visible');
    widgets.getAssetName().first().then($el => {
      firstAsset = $el.text();
      expect(firstAsset).to.contain(assetName);
    });
  }

  if (view === 'List') {
    widgets.getAssetName().first().should('be.visible');
    widgets.getAssetName().first().then($el => {
      firstAsset = $el.text();
      expect(firstAsset).to.contain(assetName);
    });
  }
});

And('I select {string} pagination and {string} results per page', (pagination, results) => {

  if (pagination === 'Pagination') {
    widgets.getPaginationPaginationStyleRdo().click();
  }
  if (pagination === 'Load more') {
    widgets.getLoadMorePaginationStyleRdo().click();
  }

  if (pagination === 'Infinite scroll') {
    widgets.getInfiniteScrollPaginationStyleRdo().click();
  }

  widgets.getResultsPerPageDropdown().click().get('mat-option').contains(results).click();
});

And('I click on Select Visible icon', () => {
  widgets.getSelectVisibleIcon().click();
});

Then('All visible assets are selected', () => {
  widgets.getAssetCheckboxes().should('have.attr', 'aria-checked', 'true');
});

And('I select pagination Navigator {string}', (page) => {
  if (page === 'First page') {
    widgets.getPaginatorFirst().click();
  }

  if (page === 'Last page') {
    widgets.getPaginatorLast().click();
  }

  if (page === 'Next page') {
    widgets.getPaginatorNext().click();
  }

  if (page === 'Previous page') {
    widgets.getPaginatorPrev().click();
  }
});

Then('All visible assets are not selected', () => {
  widgets.getAssetCheckboxes().should('have.attr', 'class')
    .and('not.contain', 'mat-checkbox-checked');

});

Then('Sort options are defaulted to Date Created and Descending', () => {
  widgets.getSortOption().should('have.text', ' By: Date Created arrow_drop_down');

  widgets.getSortDirectionBtn().should('have.attr', 'aria-label', 'Descending');
});

And('the below sort options are available', (dataTable) => {
  widgets.getSortOption().click({force: true});
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(('.mat-menu-content > :nth-child(value)').replace('value', index + 1)).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('I see {string} tooltip on hovering over Sort Direction', () => {
  widgets.getSortDirectionBtn().trigger('mouseover');
});

And('I set the sort direction to {string}', (direction) => {
  widgets.getSortDirectionBtn().invoke('attr', 'aria-label').then(currentDirection => {
    if (direction !== currentDirection) {
      widgets.getSortDirectionBtn().click();
    }
  });
});

And('I set Include {string} Domains in Results to {string}', (domainType, includeDomain) => {
  if (domainType === 'Sub') {
    widgets.getIncludeSubDomains().invoke('attr', 'class').then(getClassAttribute => {
      if ((includeDomain === 'true' && !getClassAttribute.includes('mat-checkbox-checked')) || (includeDomain === 'false' && getClassAttribute.includes('mat-checkbox-checked'))) {
        widgets.getIncludeSubDomains().click();
      }
    });
  }
  if (domainType === 'Parent') {
    widgets.getIncludeParentDomains().invoke('attr', 'class').then(getClassAttribute => {
      if ((includeDomain === 'true' && !getClassAttribute.includes('mat-checkbox-checked')) || (includeDomain === 'false' && getClassAttribute.includes('mat-checkbox-checked'))) {
        widgets.getIncludeParentDomains().click();
      }
    });
  }
});

And('I select the Sort options {string} and {string}', (sortOption, sortOrder) => {
  widgets.getSortOption().click();
  widgets.getDomain().contains(sortOption).click();
  widgets.getSortDirectionBtn().invoke('attr', 'aria-label').then(currentDirection => {
    if (sortOrder !== currentDirection) {
      widgets.getSortDirectionBtn().click();
    }
  });
});

Then('Selected Sort option {string} is highlighted', (sortOption) => {
  widgets.getSortOption().click();
  widgets.getActiveSortOption().should('have.text', ' ' + sortOption + ' ');
});

And('Sort options {string} and {string} is shown in URL', (sortOption, sortDirection) => {
  var value;

  switch (sortOption) {
  case 'Name':
    value = 'name';
    break;
  case 'Type':
    value = 'asset-type';
    break;
  case 'State':
    value = 'asset-state';
    break;
  case 'Date Created':
    value = 'asset-created';
    break;
  case 'Date Modified':
    value = 'asset-modified';
    break;
  }
  cy.url().should('include', value);
  cy.url().should('include', sortDirection);
});

And('Assets are sorted as per Sort options {string}, {string}, {string}', (sortOption, sortOrder, resultCount) => {
  var mySortOption;

  switch (sortOption) {
  case 'Name':
    mySortOption = 'asset-name';
    break;
  case 'Type':
    mySortOption = 'asset-type';
    break;
  case 'State':
    mySortOption = 'asset-state';
    break;
  case 'Date Created':
    mySortOption = 'asset-created';
    break;
  case 'Date Modified':
    mySortOption = 'asset-modified';
    break;
  }

  cy.log(mySortOption);
  cy.log(sortOrder);
  cy.log(resultCount);

  // Make API call to assetNameList_api(mySortOption, sortOrder, resultCount), & compare what's returned in the expect below:
  // expect().to.eq(widgets.getAssetName());
});

And('I scroll beyond the last asset', () => {
  // widgets.getAssetsInGrid().last().trigger('mouseover');
  // cy.scrollTo('bottom');
  widgets.getLoadMoreBtn().scrollIntoView().click();
});

Then('Icons {string} and {string} are disabled when I click {string}', (icon1, icon2, page) => {
  if (page === 'Last Page') {

    if (widgets.getPaginatorLast().should('be.enabled')) {
      widgets.getPaginatorLast().click();
      widgets.getPaginatorNext().should('not.be.enabled');
      widgets.getPaginatorLast().should('not.be.enabled');
    }
  } else {
    if (widgets.getPaginatorFirst().should('be.enabled')) {
      widgets.getPaginatorFirst().click();
      widgets.getPaginatorPrev().should('not.be.enabled');
      widgets.getPaginatorFirst().should('not.be.enabled');
    }
  }
});

And('I search for the first asset', () => {
  widgets.getAssetName().first().then($el => {
    widgets.getResourceListSearchInput().clear().type($el.text());
    widgets.getSearchOption().click();
    widgets.getSpinnerLabel().should('not.exist');
  });
});

And('Load More button is not displayed', () => {
  cy.contains('Load More').should('not.exist');
});

And('Pagination is disabled', () => {
  widgets.getPagination().invoke('attr', 'class').then(getClassAttribute => {
    if (getClassAttribute.includes('mat-radio-checked')) {
      widgets.getPaginatorFirst().should('not.be.enabled');
      widgets.getPaginatorLast().should('not.be.enabled');
      widgets.getPaginatorPrev().should('not.be.enabled');
      widgets.getPaginatorNext().should('not.be.enabled');
    } else {
      widgets.getPaginatorFirst().should('not.exist');
      widgets.getPaginatorLast().should('not.exist');
      widgets.getPaginatorPrev().should('not.exist');
      widgets.getPaginatorNext().should('not.exist');
    }
  });
});

And('Count of selected items {string} is displayed on snack bar', (resultCount) => {
  widgets.getSnackbar().then($el1 => {
    let assetCount;
    const countText = $el1.text();
    widgets.getResourceListWidgetCount().then($el => {
      assetCount = $el.text();
      const snackBarCount = ' ' + resultCount + ' of ' + assetCount.replace(' items found ', '').trim() + ' items selected ';
      expect(snackBarCount).to.eq(countText);
    });
  });
});

And('First asset is unselected as I uncheck the first asset', () => {
  widgets.getAssetCheckboxes().first().scrollIntoView().click();

  widgets.getAssetCheckboxes().first().should('have.attr', 'class')
    .and('not.contain', 'mat-checkbox-checked');
});

And('I select the first asset', () => {
  widgets.getAssetCheckboxes().first().scrollIntoView().click();
});

And('Snack bar is not displayed', () => {
  widgets.getSnackBar().should('not.exist');
});

Then('Snack bar is displayed', () => {
  widgets.getSnackBar().should('be.visible');
});

Then('Back to Top arrow is displayed with {string} tooltip upon hover', () => {
  widgets.getBackToTopBtn().should('be.visible');
});

And('I am brought back to top', () => {
  cy.window().its('scrollY').should('equal', 0);
});

When('Enable {string} Filter is unchecked on CMS Editor', (filterType) => {
  let panel;

  switch (filterType) {
  case 'keyword':
    panel = 'Keywords';
    break;
  case 'types':
    panel = 'Types';
    break;
  case 'state':
    panel = 'States';
    break;
  case 'domain':
    panel = 'Domains';
    break;
  case 'adaptor':
    panel = 'Adaptor';
    break;
  case 'phase':
    panel = 'Phase';
    break;
  }

  if (filterType === 'adaptor' || filterType === 'phase') {
    widgets.getFilterSettings().contains('Searches').click();
  }

  widgets.getFilterSettings().contains(panel).click();

  widgets.getFilterSettings().contains('Enable '+filterType+' filter').closest('.mat-checkbox').invoke('attr', 'class').then(getClassAttribute => {
    expect(getClassAttribute).to.not.include('mat-checkbox-checked');
  });
  widgets.getFilterSettings().contains(panel).click();
});

And('I {string} Enable {string} Filter on Config panel', (check, filterType) => {

  let panel;

  switch (filterType) {
  case 'keyword':
    panel = 'Keywords';
    break;
  case 'types':
    panel = 'Types';
    break;
  case 'state':
    panel = 'States';
    break;
  case 'domain':
    panel = 'Domains';
    break;
  case 'adaptor':
    panel = 'Adaptor';
    break;
  case 'phase':
    panel = 'Phase';
    break;
  case 'period':
    panel = 'period';
    break;
  }

  if (check === 'check') {
    widgets.getFilterSettings().contains(panel).click();
    widgets.getFilterSettings().contains('Enable '+filterType+' filter').closest('.mat-checkbox').invoke('attr', 'class').then(getClassAttribute => {
      if (!getClassAttribute.includes('mat-checkbox-checked')) {
        widgets.getFilterSettings().contains('Enable '+filterType+' filter').click();
      }
    });
  }

  if (check === 'uncheck') {
    widgets.getFilterSettings().contains('Enable '+filterType+' filter').closest('.mat-checkbox').invoke('attr', 'class').then(getClassAttribute => {
      if (getClassAttribute.includes('mat-checkbox-checked')) {
        widgets.getFilterSettings().contains('Enable '+filterType+' filter').click();
      }
    });
  }
});

And('I open the {string} Filter on Config panel', (text) => {
  widgets.getFilterSettings().contains(text).click();
});

And('{string} filter {string} shown in widget', (filterType, bool) => {

  let filterButton;

  switch (filterType) {
  case 'keyword':
    filterButton = widgets.getKeywordFilterBtn();
    break;

  case 'types':
    filterButton = widgets.getTypesFilterBtn();
    break;

  case 'state':
    filterButton = widgets.getStateFilterBtn();
    break;

  case 'domain':
    filterButton = widgets.getDomainFilterBtn();
    break;

  case 'adaptor':
    filterButton = widgets.getAdaptorFilterBtn();
    break;

  case 'phase':
    filterButton = widgets.getPhaseFilterBtn();
    break;
  }

  if (bool === 'is') {
    filterButton.should('be.visible');
  } else {
    filterButton.should('not.exist');
  }
});

Then('Show {string} count option is checked by default', (filterType) => {
  let filterButton;

  switch (filterType) {
  case 'keyword':
    filterButton = '';
    break;

  case 'types':
    filterButton = '';
    break;

  case 'domain':
    filterButton = '';
    break;

  case 'state':
    filterButton = '';
    break;
  }

  cy.log(filterButton);
});

And('I click on {string} filter on widget', (filterType) => {
  let filterBtn;

  switch (filterType) {
  case 'keyword':
    filterBtn = widgets.getKeywordFilterBtn();
    break;
  case 'domain':
    filterBtn = widgets.getDomainFilterBtn();
    break;
  case 'state':
    filterBtn = widgets.getStateFilterBtn();
    break;
  case 'types':
    filterBtn = widgets.getTypesFilterBtn();
    break;
  }

  filterBtn.click();
});

And('Counts are displayed on {string} filter', (filterType) => {
  let filterItem;

  switch (filterType) {
  case 'keyword':
    filterItem = widgets.getKeywordFilterSubMenu();
    break;
  case 'domain':
    filterItem = widgets.getDomainFilterSubMenu();
    break;
  case 'state':
    filterItem = widgets.getStateFilterSubMenu();
    break;
  case 'types':
    filterItem = widgets.getTypesFilterSubMenu();
    break;
  }

  filterItem.then(item => {
    const listItem = item.text();
    const assetCount = Number(listItem.substring(listItem.indexOf('(') + 1,
      listItem.indexOf(')')));
    assert.isNumber(assetCount);
  });
});

And('I select the first {string} filter', (filterType) => {

  let filterMenuText;
  let filterSubMenuText;

  if (filterType === 'keyword') {
    widgets.getKeyWordsMenuText().first().invoke('text').then(text => {
      filterMenuText = text;
    });

    widgets.getKeyWordsMenu().first().click();

    widgets.getKeywordFilterSubMenu().first().invoke('text').then(text => {
      filterSubMenuText = text;
    });

    widgets.getKeywordFilterSubMenu().first().click().then(() => {
      textOnFilter = filterMenuText + ' - ' + filterSubMenuText;
    });
  } else if (filterType === 'domain') {
    widgets.getDomainFilterSubMenu().first().invoke('text').then(text => {
      filterSubMenuText = text;
    });

    widgets.getDomainFilterSubMenu().first().click().then(() => {
      textOnFilter = 'Domain' + ' - ' + filterSubMenuText;
    });
  } else if (filterType === 'state') {
    widgets.getApprovedFilterCheckbox().first().click();

    widgets.getApprovedButton().eq(1).invoke('text').then(text => {
      filterSubMenuText = text;
      textOnFilter  = 'Approved ('+filterSubMenuText+')';
    });
  } else if (filterType === 'types') {
    widgets.getTypesFilterSubMenu().first().invoke('text').then(text => {
      filterSubMenuText = text;
    });

    widgets.getTypesFilterSubMenu().first().click().then(() => {
      textOnFilter = 'Type - ' + filterSubMenuText;
    });
  } else if (filterType === 'adaptor') {
    widgets.getAdaptorFilterSubMenu().first().invoke('text').then(text => {
      filterSubMenuText = text;
    });

    widgets.getAdaptorFilterSubMenu().first().click().then(() => {
      textOnFilter = 'Adaptors - ' + filterSubMenuText;
    });
  } else if (filterType === 'phase') {
    widgets.getPhaseFilterMenu().click();

    widgets.getDropdownOverlay().eq(1).invoke('text').then(text => {
      filterSubMenuText = text;
    });

    widgets.getDropdownOverlay().eq(1).click().then(() => {
      textOnFilter = 'Phase - ' + filterSubMenuText;
    });
  } else if (filterType === 'Downloadable Resource') {
    cy.contains(filterType).click();
  }
});

Then('Count on filter matches the count of list View', () => {
  let assetCountTextSplit;
  let filterCount;
  widgets.getSpinnerLabel().should('not.exist');

  widgets.getResourceListWidgetCount().invoke('text').then(text => {
    assetCountTextSplit = text;

    const count = textOnFilter.split(' ').pop();

    filterCount = Number(count.substring(count.indexOf('(')+1, count.indexOf(')')));


  }).then(() => {
    expect(assetCountTextSplit).to.contain(filterCount);
  });
});

And('Applied Filter is displayed as pill', () => {
  widgets.getAppliedFilters().last().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split(' ');
    expect(textOnFilter).to.contain(filterText[3]);
  });
});

And('{string} Search Filter is displayed as pill', (search) => {
  widgets.getAppliedFilters().last().invoke('text').then(text => {
    expect(text).to.contain(search+' - TeamITG');
  });
});

And('I click on X button on Applied Filter', () => {
  widgets.getAppliedFilters().then(appliedFilters => {
    appliedFilters.last().find('.mat-icon').trigger('click');
  });
});

And('Applied Filter is removed', () => {
  widgets.getAppliedFilters().should('not.exist');
});

And('Applied Filters are not shown on the widget', () => {
  widgets.getAppliedFilterText().should('not.exist');
  widgets.getAppliedFiltersArea().should('not.exist');
});

And('I {string} Show keyword count on Config panel', (selection) => {
  widgets.getShowKeyWordCount().invoke('attr', 'class').then(getClassAttribute => {
    if (selection === 'check' && !getClassAttribute.includes('mat-checkbox-checked')) {
      widgets.getShowKeyboardCount().click();
    } else if (selection === 'uncheck' && getClassAttribute.includes('mat-checkbox-checked')) {
      widgets.getShowKeyboardCount().click();
    }
  });
});

Then('Counts are not displayed on Keyword filters', () => {
// let isCountDisplayed = this.noCountOnKeywordFilters()
  // const countDisplay = [];
  // TODO: need to get the below converted to cypress when I can run to debug
  // for (const menu of await this.keywordFilterItem) {
  //   await this.elementToBeClickable(menu);
  //   await menu.click();
  //   await this.keywordFilterSubMenu.each(async (item) => {
  //     let presence = await this.isPresent(
  //       item.element(this.keywordFilterSubMenuCount.locator()),
  //     );
  //     await countDisplay.push(presence);
  //   });
  // }
  // return await countDisplay;


// whatever is returned above is asserted on below
// expect(isCountDisplayed.every(Boolean))to be false
});

And('Keyword filter parameters are displayed on URL', () => {
  cy.url().should('include', 'keywordFilter=');
});

And('URL shows asset property {string} and value for asset {string}', (property, value) => {
  // cy.url().should('include', property);
  cy.url().should('include', value);
});

And('I click on Clear All button', () => {
  widgets.getClearAllButton().click();
});

And('All the applied filters are cleared', () => {
  widgets.getAppliedFilterText().should('not.exist');
  widgets.getAppliedFiltersArea().should('not.exist');
});

And('Keyword Filters are removed from URL', () => {
  cy.url().should('include', 'keywordFilter=%5B%5D');
});

And('I select the second adaptor filter', () => {
  widgets.getAdaptorFilterSubMenu().eq(1).invoke('text').then(text => {
    textOnSecondFilter = 'Adaptors - ' + text;
  });

  widgets.getAdaptorFilterSubMenu().eq(1).click();
});

And('First adaptor filter {string} selected', (selection) => {
  cy.wait(1000);
  if (selection === 'is') {
    widgets.getAdaptorFilterSubMenu().first().should('have.attr', 'aria-selected', 'true');
  } else if (selection === 'is not') {
    widgets.getAdaptorFilterSubMenu().first().should('have.attr', 'aria-selected', 'false');
  }
});

And('Filter pill is updated to second filter', () => {
  widgets.getAppliedFilters().last().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split(' ');
    expect(textOnSecondFilter).to.contain(filterText[3]);
  });
});

And('I {string} multiSelect option for adaptor filter', (selection) => {
  widgets.getFilterSettings().contains('Multiselect').closest('.mat-checkbox').invoke('attr', 'class').then(getClassAttribute => {
    if ((selection === 'select' && !getClassAttribute.includes('mat-checkbox-checked')) || (selection === 'unSelect' && getClassAttribute.includes('mat-checkbox-checked'))) {
      widgets.getFilterSettings().contains('Multiselect').click();
    }
  });
});

And('Additional filter pill is displayed with second adaptor', () => {
  widgets.getAppliedFilters().last().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split(' ');
    expect(textOnSecondFilter).to.contain(filterText[7]);
  });

  widgets.getAppliedFilters().its('length').then(count => {

    widgets.getAppliedFilters().eq(count - 2).invoke('text').then((textOnPill)=> {
      const myTextOnPill = textOnPill.split(' ');
      expect(textOnSecondFilter).to.contain(myTextOnPill[7]);
    });
  });
});

And('I input an adaptor label', () => {
  const d = new Date();
  const dateString = d.toLocaleDateString('en-GB');

  widgets.getAdaptorLabel().clear();

  const text = 'AdaptorLabel '+dateString;

  widgets.getAdaptorLabel().type(text);
  cy.task('setVal', text);
});

And('I input a phase label', () => {
  const d = new Date();
  const dateString = d.toLocaleDateString('en-GB');

  widgets.getPhaseLabel().clear();

  const text = 'PhaseLabel '+dateString;

  widgets.getPhaseLabel().type(text);
  cy.task('setVal', text);
});

And('I am brought to the top of the page', () => {
  cy.window().its('scrollY').should('equal', 0);
});

And('I clear the basket', () => {
  widgets.getBasket().click();

  widgets.getBasketCount().invoke('text').then(basketCountText => {
    if (basketCountText.includes('0 items') === false) {
      widgets.getSnackBarRemoveButton().click();
      cy.contains('Remove all').click();
      cy.contains('Basket emptied').should('be.visible');
    }
  });
});

And('I add an asset to the basket', () => {
  widgets.getAsset().first().click();
  cy.contains('Add to basket').click();
});

And('Basket count is updated', () => {
  widgets.getBasket().click();
  cy.contains('0 items in basket').should('be.visible');
});

And('Basket count is updated on selecting removal option {string}', (removalOption) => {
  let count;
  let snackBarCount;
  let countOnBasketTitle;

  cy.wait(1000);

  widgets.getBasketCount().invoke('text').then(basketCountText => {
    countOnBasketTitle = basketCountText.split(' ');
    count = countOnBasketTitle[1];
  }).then(() => {

    if (removalOption === 'Remove selected') {
      snackBarCount = '99';
    } else if (removalOption === 'Remove visible') {
      snackBarCount = '70';
    } else if (removalOption === 'Remove all') {
      snackBarCount = '0';
    }

    expect(count).to.eq(snackBarCount);
  });
});

And('I select the first adaptor filter with label', () => {
  cy.task('getVal').then((text) => {
    cy.contains(text).click();
  });
});

And('Applied filter pill has label text', () => {
  widgets.getAppliedFilters().last().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split(' ');
    cy.task('getVal').then((text) => {
      expect(text).to.contain(filterText[1]);
    });
  });
});

And('I select the second phase filter', () => {
  widgets.getPhaseFilterMenu().click();

  widgets.getDropdownOverlay().eq(2).invoke('text').then(text => {
    textOnSecondFilter = text;
  });

  widgets.getDropdownOverlay().eq(2).click();
});

And('Asset Properties has {string} as a default value', (value) => {
  widgets.getAssetProperties().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split(' ');
    expect(filterText[1]).to.eq(value);
  });
});

And('I select {string} from asset properties', (text) => {
  widgets.getAssetPropertiesClear().click();
  widgets.getListBox().contains(text).click();
});

And('Period Filter label is displayed as {string}', (label) => {
  widgets.getPeriodFilter().invoke('text').then(text => {
    const trimText = text.trim();
    expect(label).to.eq(trimText);
  });
});

And('I set period {string} to {string} and {string} Instant', (StartDate, EndDate, Instant) => {
  widgets.getPeriodStartDate().clear().type(StartDate);

  if (EndDate !== '') {
    widgets.getPeriodEndDate().clear().type(EndDate);
  }

  widgets.getInstantField().click();
  widgets.getInstantDropdown().contains(Instant).click();
  cy.wait(2000);
});

And('Pagination Range and PageNo on URL are shown for {string}', (resultCount, dataTable) => {
  let assetCount;
  let range;
  let min;
  let max;
  let pageNo;

  widgets.getResourceListWidgetCount().invoke('text').then(text => {
    assetCount = text.split(' ')[1];
  }).then(() => {
    dataTable.raw().forEach((page) => {
      if (page.toString() === 'Last Page') {
        if (widgets.getPaginatorLast().should('be.enabled')) {
          widgets.getPaginatorLast().click();
          min = (Math.floor(assetCount / resultCount) * resultCount + 1).toString();
          max = assetCount.toString();
          pageNo = Math.floor(assetCount / resultCount);
        }
      } else if (page.toString() === 'Previous Page') {
        if (widgets.getPaginatorPrev().should('be.enabled')) {
          widgets.getPaginatorPrev().click();
          max = (
            Math.floor(assetCount / resultCount) * resultCount
          ).toString();
          min = (max - resultCount + 1).toString();
          pageNo = Math.floor(assetCount / resultCount) - 1;
        }
      } else if (page.toString() === 'First Page') {
        if (widgets.getPaginatorFirst().should('be.enabled')) {
          widgets.getPaginatorFirst().click();
          min = '1'.toString();
          max = resultCount;
          pageNo = 0;
        }
      } else if (page.toString() === 'Next Page') {
        if (widgets.getPaginatorNext().should('be.enabled')) {
          widgets.getPaginatorNext().click();
        }
        min = (Number(resultCount) + 1).toString();
        max = (Number(resultCount) * 2).toString();
        pageNo = 1;
      }
      range = min.concat(' – ', max, ' of ', assetCount);
      widgets.getPaginatorRangeLabel().should('contain', range.toString());
      cy.url().should('include', 'page=' + pageNo);
    });
  });
});

And('I click the back button', () => {
  widgets.getBackButton().click();
});