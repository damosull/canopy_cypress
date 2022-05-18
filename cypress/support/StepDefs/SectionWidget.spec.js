import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../PageObjects/HomePage';
import '@4tw/cypress-drag-drop';

const homePage = new HomePage();

const assetName = '';
let myUrl = '';
let textOnFilter;
let textOnSecondFilter;

Given('I login to ITG', () => {
  cy.login();
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
  homePage.getClearLayoutButton().should('be.visible');
  homePage.getClearLayoutButton().click();
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

  homePage.getWidget().eq(value).drag(homePage.getblankArea(), { target: { position: 'top' }});
  cy.contains('Editing ' + widget).should('be.visible');
});

And('Left hand panel is shown', () => {
  homePage.getWidgetPanel().should('be.visible');
});

And('Left hand panel is titled {string}', (widgetTitle) => {
  homePage.getWidgetPanelTitle().should('have.text', widgetTitle);
});

And('I click on close button on Widget panel', () => {
  homePage.getWidgetPanelCloseBtn().click();
});

And('Widget Panel is collapsed', () => {
  homePage.getWidgetPanel().should('not.be.visible');
});

And('I click on widget Settings Button', () => {
  homePage.getWidgetSettingsBtn().click();
});

And('I update the widget title to {string}', (text) => {
  homePage.getWidgetTitleField().clear().type(text);
});

Then('widget title is set to {string}', (title) => {
  homePage.getActiveWidgetTitle().should('have.text', title);
});

And('Right hand panel is shown', () => {
  homePage.getEditingSectionPanel().should('be.visible');
});

And('Config panel is collapsed', () => {
  homePage.getEditingSectionPanel().should('not.be.visible');
});

And('Right hand panel is titled {string}', (widgetHeader) => {
  homePage.getEditingSectionPanelHeader().should('have.text', widgetHeader);
});

And('Widget is removed', () => {
  homePage.getActiveWidgetTitle().should('not.exist');
});

And('I select {string} widget Alignment on Config Panel', (alignment) => {
  cy.get(homePage.getWidgetAlignment().replace('value', alignment)).click();
});

And('I set the widget Width on Config Panel to {string}', (value) => {

  const currentValue = 100;
  const targetValue = 70;
  const increment = 1;
  const steps = (currentValue - targetValue) / increment;
  const arrows = '{leftarrow}'.repeat(steps);

  homePage.getConfigWidth().should('have.attr', 'aria-valuenow', currentValue).type(arrows);

  homePage.getConfigWidth().should('have.attr', 'aria-valuenow', value);
});

And('Widget is aligned to {string}', (alignment) => {
  if (alignment === 'Left') {
    alignment = 'margin: 0px;';
  } else if (alignment === 'Center') {
    alignment = 'margin: 0px auto;';
  } else if (alignment === 'Right') {
    alignment = '0px 0px 0px auto;';
  }

  homePage.getActiveWidget().should('have.attr', 'style')
    .and('contain', alignment);
});

And('Widget width is set to {string}', (value) => {
  homePage.getActiveWidget().should('have.attr', 'style')
    .and('contain', 'width: '+value+'%;');
});

And('All widgets are cleared', () => {
  homePage.getWidgets().should('have.length', 1);
});

And('Widget being edited is highlighted', () => {
  homePage.getActiveWidget().should('have.attr', 'class')
    .and('contain', 'is-active');
});

And('padding for widget is set to {string}', (spacing) => {
  homePage.getSectionWidget().should('have.attr', 'style')
    .and('contain', spacing+'px');
});

And('I set the {string} Spacing Option to {string}', (padding, value) => {

  const currentValue = 0;
  const targetValue = value;
  const increment = 5;
  const steps = (targetValue - currentValue) / increment;
  const arrows = '{leftarrow}'.repeat(steps);

  cy.contains(padding).click();
  homePage.getWidgetSpacingSlider().should('have.attr', 'aria-valuenow', currentValue).type(arrows);
  homePage.getWidgetSpacingSlider().should('have.attr', 'aria-valuenow', value);
});

Then('the {string} button style radio button is {string}', (button, option) => {
  if (button === 'Button') {
    homePage.getButtonButtonStyleRadioButton().should(`be.${option}`);
  }
});

Then('Open in New Tab option is {string}', (option) => {
  if (option === 'checked') {
    homePage.getOpenInTabCheckBox().should('be.checked');
  }
});

And('Destination URL is {string}', (url) => {
  homePage.getDestinationUrlInput().should('have.text', `${url}`);
});

When('I add {string} text to the widget', (text) => {
  homePage.getWidgetTextInput().type(text);
});

And('I set Destination URL to {string}', (url) => {
  homePage.getDestinationUrlInput().clear().type(url);
});

And('I {string} open in new tab checkbox', (checkOrUncheck) => {
  if (checkOrUncheck === 'check') {
    homePage.getOpenInTabCheckBox().check({force: true});
  } else {
    homePage.getOpenInTabCheckBox().uncheck({force: true});
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

  homePage.getFontSizeSlider().should('have.attr', 'aria-valuenow', currentValue).type(arrows);

  homePage.getFontSizeSlider().should('have.attr', 'aria-valuenow', value);
});

And('I select the font type {string}, {string}, {string}', (bold, italic, underline) => {
  if (bold === 'true') {
    homePage.getBoldFontButton().click();
  }

  if (italic === 'true') {
    homePage.getItalicFontButton().click();
  }

  if (underline === 'true') {
    homePage.getUnderlineFontButton().click();
  }
});

Then('Text {string} is shown on the widget with selected font size and type {string}, {string}, {string}', (freeText, bold, italic, underline) => {
  homePage.getHeadingWidgetContent().should('have.text', ' ' + freeText + ' ');
  homePage.getHeadingWidgetContent().should('have.css', 'font-size', '14px');

  if (bold === 'true') {
    homePage.getHeadingWidgetContent().should('have.css', 'font-weight', '700');
  }

  if (italic === 'true') {
    homePage.getHeadingWidgetContent().should('have.css', 'font-style', 'italic');
  }

  if (underline === 'true') {
    homePage.getHeadingWidgetContent().should('have.css', 'text-decoration-line', 'underline');
  }
});

Then('Asset count is listed on the Resource list widget', () => {
  homePage.getResourceListWidgetCount().contains('items found');
});

And('I enter {string} into the {string} input', (text, inputField) => {
  if (inputField === 'Resource List Search') {
    homePage.getResourceListSearchInput().clear().type(text);
  }
});

And('I click the search option', () => {
  homePage.getSearchOption().click();
});

And('{string} is displayed', (text)=> {
  cy.contains(text).should('be.visible');
});

And('I navigate to the last asset', () => {
  homePage.getAssetsInGrid().last().trigger('mouseover');
});

And('I click on the last asset', () => {
  homePage.getAssetsInGrid().last().click();
});

And('I click button based on aria-label {string}', (label) => {
  cy.get(homePage.getWidgetAlignment().replace('value', label)).click();
});

And('I click on Domain option on Toolbar', () => {
  homePage.getDomainOption().click();
});

And('I select {string} domain', (domain) => {
  homePage.getDomain().contains(domain).click();
});

And('I check the Include Sub Domains in results checkbox', () => {
  homePage.getIncludeSubDomains().click();
});

And('I check the Include Parent Domains in results checkbox', () => {
  homePage.getIncludeParentDomains().click();
});

Then('Load More pagination style is selected', () => {
  homePage.getLoadMorePaginationStyle().should('have.attr', 'class')
    .and('contain', 'mat-radio-checked');
});

And('Results per page config is {string}', (result) => {
  homePage.getResultsPerPageDropdown().should('have.text', result);
});

And('Results per page drop down has the below options', (dataTable) => {
  homePage.getResultsPerPageDropdown().click();
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(homePage.getResultsPerPageValues().replace('value', index +4)).should('have.text', ' ' + $ele.toString() + ' ');
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

  homePage.getAssetsInGrid().should('have.length', expectedCount);
});

Then('Grid View is set by default on Config Panel', () => {
  homePage.getGridCheckBox().should('have.attr', 'class')
    .and('contain', 'mat-radio-checked');
});

And('Resource List columns should have the below headings', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    homePage.getResourceListColumns().eq(index + 1).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('Assets on Resource List are shown in {string} view', (string) => {
  if (string === 'Grid') {
    homePage.getAssetsInGrid().should('be.visible');
  }
  if (string === 'List') {
    homePage.getAssetsInList().should('be.visible');
  }
});

And('I select {string} view as Search Result style', (string) => {
  if (string === 'List') {
    homePage.getListCheckBox().should('be.visible');
    homePage.getListCheckBox().click();
  }
  if (string === 'Grid') {
    homePage.getGridCheckBox().should('be.visible');
    homePage.getGridCheckBox().click();
  }
});

And('AssetName and AssetType are shown under the asset in Grid view', () => {
  homePage.getAssetName().should('be.visible');
  homePage.getAssetType().should('be.visible');
});

And('I click on the first AssetName in Asset {string} view', (view) => {
  if (view === 'Grid') {
    homePage.getAssetName().first().click();
  } else if (view === 'List') {
    homePage.getAssetNameInList().first().click();
  }
});

And('I click on the last AssetName in Asset {string} view', (view) => {
  if (view === 'Grid') {
    homePage.getAssetName().last().invoke('text').then(text => {
      cy.task('setVal', text);
      cy.contains(text).click();
    });
  } else if (view === 'List') {
    homePage.getAssetNameInList().last().invoke('text').then(text => {
      cy.task('setVal', text);
      cy.contains(text).click();
    });
  }
});

And('I see the Last asset in the asset {string} view', (view) => {
  cy.task('getVal').then((value) => {
    if (view === 'Grid') {
      homePage.getAssetName().last().invoke('text').then(text => {
        expect(text).to.eq(value);
      });
    } else if (view === 'List') {
      homePage.getAssetNameInList().last().invoke('text').then(text => {
        expect(text).to.eq(value);
      });
    }
  });
});

Then('Asset Details Page opens with {string} as title', (title) => {
  cy.url().should('include', 'assetDetails');
  homePage.getAssetDetailTitle().should('have.text', title);
});

And('{string} Asset Type is displayed on Asset Details page', (type) => {
  cy.url().should('include', 'assetDetails');
  homePage.getAssetDetailsType().invoke('text').should('eq', type);
});

And('Asset Preview is displayed on Asset Details page', () => {
  homePage.getAssetPreview().should('be.visible');
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
    homePage.getAssetsInGrid().first().should('be.visible');
    homePage.getAssetsInGrid().first().then($el => {
      firstAsset = $el.text();
      expect(firstAsset).to.contain(assetName);
    });
  }

  if (view === 'List') {
    homePage.getAssetNameInList().first().should('be.visible');
    homePage.getAssetNameInList().first().then($el => {
      firstAsset = $el.text();
      expect(firstAsset).to.contain(assetName);
    });
  }
});

And('I select {string} pagination and {string} results per page', (pagination, results) => {

  if (pagination === 'Pagination') {
    homePage.getPaginationPaginationStyleRdo().click();
  }
  if (pagination === 'Load more') {
    homePage.getLoadMorePaginationStyleRdo().click();
  }

  if (pagination === 'Infinite scroll') {
    homePage.getInfiniteScrollPaginationStyleRdo().click();
  }

  homePage.getResultsPerPageDropdown().click().get('mat-option').contains(results).click();
});

And('I click on Select Visible icon', () => {
  homePage.getSelectVisibleIcon().click();
});

Then('All visible assets are selected', () => {
  homePage.getAssetCheckboxes().should('have.attr', 'aria-checked', 'true');
});

And('I select pagination Navigator {string}', (page) => {
  if (page === 'First page') {
    homePage.getPaginatorFirst().click();
  }

  if (page === 'Last page') {
    homePage.getPaginatorLast().click();
  }

  if (page === 'Next page') {
    homePage.getPaginatorNext().click();
  }

  if (page === 'Previous page') {
    homePage.getPaginatorPrev().click();
  }
});

Then('All visible assets are not selected', () => {
  homePage.getAssetCheckboxes().should('have.attr', 'aria-checked', 'false');
});

Then('Sort options are defaulted to Date Created and Descending', () => {
  homePage.getSortOption().should('have.text', ' By: Date Created arrow_drop_down');

  homePage.getSortDirectionBtn().should('have.attr', 'aria-label', 'Descending');
});

And('the below sort options are available', (dataTable) => {
  homePage.getSortOptions().click();
  dataTable.rawTable.forEach(($ele, index) => {
    homePage.getSortButton().eq(index).should('have.text', ' ' + $ele.toString() + ' ');
  });
  homePage.getActiveSortOption().click();
});

And('I see {string} tooltip on hovering over Sort Direction', () => {
  homePage.getSortDirectionBtn().trigger('mouseover');
});

And('I set the sort direction to {string}', (direction) => {
  homePage.getSortDirectionBtn().invoke('attr', 'aria-label').then(currentDirection => {
    if (direction !== currentDirection) {
      homePage.getSortDirectionBtn().click();
    }
  });
});

And('I set Include {string} Domains in Results to {string}', (domainType, includeDomain) => {
  if (domainType === 'Sub') {
    homePage.getIncludeSubDomains().invoke('attr', 'class').then(getClassAttribute => {
      if ((includeDomain === 'true' && !getClassAttribute.includes('mat-checkbox-checked')) || (includeDomain === 'false' && getClassAttribute.includes('mat-checkbox-checked'))) {
        homePage.getIncludeSubDomains().click();
      }
    });
  }
  if (domainType === 'Parent') {
    homePage.getIncludeParentDomains().invoke('attr', 'class').then(getClassAttribute => {
      if ((includeDomain === 'true' && !getClassAttribute.includes('mat-checkbox-checked')) || (includeDomain === 'false' && getClassAttribute.includes('mat-checkbox-checked'))) {
        homePage.getIncludeParentDomains().click();
      }
    });
  }
});

And('I select the Sort options {string} and {string}', (sortOption, sortOrder) => {
  homePage.getSortOption().click();
  homePage.getDomain().contains(sortOption).click();
  homePage.getSortDirectionBtn().invoke('attr', 'aria-label').then(currentDirection => {
    if (sortOrder !== currentDirection) {
      homePage.getSortDirectionBtn().click();
    }
  });
});

Then('Selected Sort option {string} is highlighted', (sortOption) => {
  homePage.getSortOption().click();
  homePage.getActiveSortOption().should('have.text', ' ' + sortOption + ' ');
});

And('Sort options {string} and {string} is shown in URL', (sortOption, sortDirection) => {
  var value;

  switch (sortOption) {
  case 'Name':
    value = 'asset-name';
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
  // expect().to.eq(homePage.getAssetName());
});

And('I scroll beyond the last asset', () => {
  homePage.getAssetsInGrid().last().trigger('mouseover');
  cy.scrollTo(0, 40000);
});

Then('Icons {string} and {string} are disabled when I click {string}', (icon1, icon2, page) => {
  if (page === 'Last Page') {

    if (homePage.getPaginatorLast().should('be.enabled')) {
      homePage.getPaginatorLast().click();
      homePage.getPaginatorNext().should('not.be.enabled');
      homePage.getPaginatorLast().should('not.be.enabled');
    }
  } else {
    if (homePage.getPaginatorFirst().should('be.enabled')) {
      homePage.getPaginatorFirst().click();
      homePage.getPaginatorPrev().should('not.be.enabled');
      homePage.getPaginatorFirst().should('not.be.enabled');
    }
  }
});

And('I search for the first asset', () => {
  homePage.getAssetName().first().then($el => {
    homePage.getResourceListSearchInput().clear().type($el.text());
    homePage.getSearchOption().click();
    homePage.getSpinnerLabel().should('not.exist');
  });
});

And('Load More button is not displayed', () => {
  cy.contains('Load More').should('not.exist');
});

And('Pagination is disabled', () => {
  homePage.getPagination().invoke('attr', 'class').then(getClassAttribute => {
    if (getClassAttribute.includes('mat-radio-checked')) {
      homePage.getPaginatorFirst().should('not.be.enabled');
      homePage.getPaginatorLast().should('not.be.enabled');
      homePage.getPaginatorPrev().should('not.be.enabled');
      homePage.getPaginatorNext().should('not.be.enabled');
    } else {
      homePage.getPaginatorFirst().should('not.exist');
      homePage.getPaginatorLast().should('not.exist');
      homePage.getPaginatorPrev().should('not.exist');
      homePage.getPaginatorNext().should('not.exist');
    }
  });
});

And('Count of selected items {string} is displayed on snack bar', (resultCount) => {
  homePage.getSnackbar().then($el1 => {
    let assetCount;
    const countText = $el1.text();
    homePage.getResourceListWidgetCount().then($el => {
      assetCount = $el.text();
      const snackBarCount = ' ' + resultCount + ' of ' + assetCount.replace(' items found ', '').trim() + ' items selected ';
      expect(snackBarCount).to.eq(countText);
    });
  });
});

And('First asset is unselected as I uncheck the first asset', () => {
  homePage.getAsset().first().click();

  homePage.getAssetCheckboxes().first().should('have.attr', 'class')
    .and('not.contain', 'mat-checkbox-checked');
});

And('Snack bar is not displayed', () => {
  homePage.getSnackBar().should('not.exist');
});

Then('Snack bar is displayed', () => {
  homePage.getSnackBar().should('be.visible');
});

Then('Back to Top arrow is displayed with {string} tooltip upon hover', () => {
  homePage.getBackToTopBtn().should('be.visible');
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
    homePage.getFilterSettings().contains('Searches').click();
  }

  homePage.getFilterSettings().contains(panel).click();

  homePage.getFilterSettings().contains('Enable '+filterType+' filter').closest('.mat-checkbox').invoke('attr', 'class').then(getClassAttribute => {
    expect(getClassAttribute).to.not.include('mat-checkbox-checked');
  });
  homePage.getFilterSettings().contains(panel).click();
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
    homePage.getFilterSettings().contains(panel).click();
    homePage.getFilterSettings().contains('Enable '+filterType+' filter').closest('.mat-checkbox').invoke('attr', 'class').then(getClassAttribute => {
      if (!getClassAttribute.includes('mat-checkbox-checked')) {
        homePage.getFilterSettings().contains('Enable '+filterType+' filter').click();
      }
    });
  }

  if (check === 'uncheck') {
    homePage.getFilterSettings().contains('Enable '+filterType+' filter').closest('.mat-checkbox').invoke('attr', 'class').then(getClassAttribute => {
      if (getClassAttribute.includes('mat-checkbox-checked')) {
        homePage.getFilterSettings().contains('Enable '+filterType+' filter').click();
      }
    });
  }
});

And('I open the {string} Filter on Config panel', (text) => {
  homePage.getFilterSettings().contains(text).click();
});

And('{string} filter {string} shown in widget', (filterType, bool) => {

  let filterButton;

  switch (filterType) {
  case 'keyword':
    filterButton = homePage.getKeywordFilterBtn();
    break;

  case 'types':
    filterButton = homePage.getTypesFilterBtn();
    break;

  case 'state':
    filterButton = homePage.getStateFilterBtn();
    break;

  case 'domain':
    filterButton = homePage.getDomainFilterBtn();
    break;

  case 'adaptor':
    filterButton = homePage.getAdaptorFilterBtn();
    break;

  case 'phase':
    filterButton = homePage.getPhaseFilterBtn();
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
    filterBtn = homePage.getKeywordFilterBtn();
    break;
  case 'domain':
    filterBtn = homePage.getDomainFilterBtn();
    break;
  case 'state':
    filterBtn = homePage.getStateFilterBtn();
    break;
  case 'types':
    filterBtn = homePage.getTypesFilterBtn();
    break;
  }

  filterBtn.click();
});

And('Counts are displayed on {string} filter', (filterType) => {
  let filterItem;

  switch (filterType) {
  case 'keyword':
    filterItem = homePage.getKeywordFilterSubMenu();
    break;
  case 'domain':
    filterItem = homePage.getDomainFilterSubMenu();
    break;
  case 'state':
    filterItem = homePage.getStateFilterSubMenu();
    break;
  case 'types':
    filterItem = homePage.getTypesFilterSubMenu();
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
    homePage.getKeyWordsMenuText().first().invoke('text').then(text => {
      filterMenuText = text;
    });

    homePage.getKeyWordsMenu().first().click();

    homePage.getKeywordFilterSubMenu().first().invoke('text').then(text => {
      filterSubMenuText = text;
    });

    homePage.getKeywordFilterSubMenu().first().click().then(() => {
      textOnFilter = filterMenuText + ' - ' + filterSubMenuText;
    });
  } else if (filterType === 'domain') {
    homePage.getDomainFilterSubMenu().first().invoke('text').then(text => {
      filterSubMenuText = text;
    });

    homePage.getDomainFilterSubMenu().first().click().then(() => {
      textOnFilter = 'Domain' + ' - ' + filterSubMenuText;
    });
  } else if (filterType === 'state') {
    homePage.getApprovedFilterCheckbox().first().click();

    homePage.getApprovedButton().eq(1).invoke('text').then(text => {
      filterSubMenuText = text;
      textOnFilter  = 'Approved ('+filterSubMenuText+')';
    });
  } else if (filterType === 'types') {
    homePage.getTypesFilterSubMenu().first().invoke('text').then(text => {
      filterSubMenuText = text;
    });

    homePage.getTypesFilterSubMenu().first().click().then(() => {
      textOnFilter = 'Type - ' + filterSubMenuText;
    });
  } else if (filterType === 'adaptor') {
    homePage.getAdaptorFilterSubMenu().first().invoke('text').then(text => {
      filterSubMenuText = text;
    });

    homePage.getAdaptorFilterSubMenu().first().click().then(() => {
      textOnFilter = 'Adaptors - ' + filterSubMenuText;
    });
  } else if (filterType === 'phase') {
    homePage.getPhaseFilterMenu().click();

    homePage.getDropdownOverlay().eq(1).invoke('text').then(text => {
      filterSubMenuText = text;
    });

    homePage.getDropdownOverlay().eq(1).click().then(() => {
      textOnFilter = 'Phase - ' + filterSubMenuText;
    });
  }
});

Then('Count on filter matches the count of list View', () => {
  let assetCountTextSplit;
  let filterCount;
  homePage.getSpinnerLabel().should('not.exist');

  homePage.getResourceListWidgetCount().invoke('text').then(text => {
    assetCountTextSplit = text;

    const count = textOnFilter.split(' ').pop();

    filterCount = Number(count.substring(count.indexOf('(')+1, count.indexOf(')')));


  }).then(() => {
    expect(assetCountTextSplit).to.contain(filterCount);
  });
});

And('Applied Filter is displayed as pill', () => {
  homePage.getAppliedFilters().last().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split(' ');
    expect(textOnFilter).to.contain(filterText[3]);
  });
});

And('{string} Search Filter is displayed as pill', (search) => {
  homePage.getAppliedFilters().last().invoke('text').then(text => {
    expect(text).to.contain(search+' - TeamITG');
  });
});

And('I click on X button on Applied Filter', () => {
  homePage.getAppliedFilters().then(appliedFilters => {
    appliedFilters.last().find('.mat-icon').trigger('click');
  });
});

And('Applied Filter is removed', () => {
  homePage.getAppliedFilters().should('not.exist');
});

And('Applied Filters are not shown on the widget', () => {
  homePage.getAppliedFilterText().should('not.exist');
  homePage.getAppliedFiltersArea().should('not.exist');
});

And('I {string} Show keyword count on Config panel', (selection) => {
  homePage.getShowKeyWordCount().invoke('attr', 'class').then(getClassAttribute => {
    if (selection === 'check' && !getClassAttribute.includes('mat-checkbox-checked')) {
      homePage.getShowKeyboardCount().click();
    } else if (selection === 'uncheck' && getClassAttribute.includes('mat-checkbox-checked')) {
      homePage.getShowKeyboardCount().click();
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
  homePage.getClearAllButton().click();
});

And('All the applied filters are cleared', () => {
  homePage.getAppliedFilterText().should('not.exist');
  homePage.getAppliedFiltersArea().should('not.exist');
});

And('Keyword Filters are removed from URL', () => {
  cy.url().should('include', 'keywordFilter=%5B%5D');
});

And('I select the second adaptor filter', () => {
  homePage.getAdaptorFilterSubMenu().eq(1).invoke('text').then(text => {
    textOnSecondFilter = 'Adaptors - ' + text;
  });

  homePage.getAdaptorFilterSubMenu().eq(1).click();
});

And('First adaptor filter {string} selected', (selection) => {
  cy.wait(1000);
  if (selection === 'is') {
    homePage.getAdaptorFilterSubMenu().first().should('have.attr', 'aria-selected', 'true');
  } else if (selection === 'is not') {
    homePage.getAdaptorFilterSubMenu().first().should('have.attr', 'aria-selected', 'false');
  }
});

And('Filter pill is updated to second filter', () => {
  homePage.getAppliedFilters().last().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split(' ');
    expect(textOnSecondFilter).to.contain(filterText[3]);
  });
});

And('I {string} multiSelect option for adaptor filter', (selection) => {
  homePage.getFilterSettings().contains('Multiselect').closest('.mat-checkbox').invoke('attr', 'class').then(getClassAttribute => {
    if ((selection === 'select' && !getClassAttribute.includes('mat-checkbox-checked')) || (selection === 'unSelect' && getClassAttribute.includes('mat-checkbox-checked'))) {
      homePage.getFilterSettings().contains('Multiselect').click();
    }
  });
});

And('Additional filter pill is displayed with second adaptor', () => {
  homePage.getAppliedFilters().last().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split(' ');
    expect(textOnSecondFilter).to.contain(filterText[7]);
  });

  homePage.getAppliedFilters().its('length').then(count => {

    homePage.getAppliedFilters().eq(count - 2).invoke('text').then((textOnPill)=> {
      const myTextOnPill = textOnPill.split(' ');
      expect(textOnSecondFilter).to.contain(myTextOnPill[7]);
    });
  });
});

And('I input an adaptor label', () => {
  const d = new Date();
  const dateString = d.toLocaleDateString('en-GB');

  homePage.getAdaptorLabel().clear();

  const text = 'AdaptorLabel '+dateString;

  homePage.getAdaptorLabel().type(text);
  cy.task('setVal', text);
});

And('I input a phase label', () => {
  const d = new Date();
  const dateString = d.toLocaleDateString('en-GB');

  homePage.getPhaseLabel().clear();

  const text = 'PhaseLabel '+dateString;

  homePage.getPhaseLabel().type(text);
  cy.task('setVal', text);
});

And('I am brought to the top of the page', () => {
  cy.window().its('scrollY').should('equal', 0);
});

And('I clear the basket', () => {
  homePage.getBasket().click();
  homePage.getSnackBarRemoveButton().click();
  cy.contains('Remove all').click();
  cy.contains('Basket emptied').should('be.visible');
});

And('I add an asset to the basket', () => {
  homePage.getAsset().first().click();
  cy.contains('Add to basket').click();
});

And('Basket count is updated', () => {
  homePage.getBasket().click();
  cy.contains('0 items in basket').should('be.visible');
});

And('I select the first adaptor filter with label', () => {
  cy.task('getVal').then((text) => {
    cy.contains(text).click();
  });
});

And('Applied filter pill has label text', () => {
  homePage.getAppliedFilters().last().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split(' ');
    cy.task('getVal').then((text) => {
      expect(text).to.contain(filterText[1]);
    });
  });
});

And('I select the second phase filter', () => {
  homePage.getPhaseFilterMenu().click();

  homePage.getDropdownOverlay().eq(2).invoke('text').then(text => {
    textOnSecondFilter = text;
  });

  homePage.getDropdownOverlay().eq(2).click();
});

And('Asset Properties has {string} as a default value', (value) => {
  homePage.getAssetProperties().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split(' ');
    expect(filterText[1]).to.eq(value);
  });
});

And('I select {string} from asset properties', (text) => {
  homePage.getAssetPropertiesClear().click();
  homePage.getListBox().contains(text).click();
});

And('Period Filter label is displayed as {string}', (label) => {
  homePage.getPeriodFilter().invoke('text').then(text => {
    const trimText = text.trim();
    expect(label).to.eq(trimText);
  });
});

And('I set period {string} to {string} and {string} Instant', (StartDate, EndDate, Instant) => {
  homePage.getPeriodStartDate().clear().type(StartDate);

  if (EndDate !== '') {
    homePage.getPeriodEndDate().clear().type(EndDate);
  }

  homePage.getInstantField().click();
  homePage.getInstantDropdown().contains(Instant).click();
});